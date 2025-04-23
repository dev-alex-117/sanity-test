import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  ReactNode,
} from 'react';
import { useEffectOnce } from '@/hooks/use-effect-once';
import { SanityClient } from '@sanity/client';

const query = `
  {
    "header": *[_type == "header"][0]{
      logo,
      links,
      ctas
    },
    "page": *[_type == "landingPage"][0]{
      title,
      slug,
      items[]{
        _type,
        ...
      }
    },
  }
`;


interface SanityState {
  data: Record<string, any>;
  loaded: boolean;
  error: Error | null;
}

const actionTypes = {
  SET_DATA: 'SET_DATA',
  SET_ERROR: 'SET_ERROR'
} as const;

type SanityAction =
  | {
    type: typeof actionTypes.SET_DATA
    payload: Record<string, any>
  }
  | {
    type: typeof actionTypes.SET_ERROR
    payload: Error
  };

const sanityReducer = (state: SanityState, action: SanityAction): SanityState => {
  switch (action.type) {
    case actionTypes.SET_DATA:
      return {
        ...state,
        data: action.payload,
        loaded: true
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loaded: true
      };
    default:
      return state;
  }
};

type SanityContextType = {
  state: SanityState
}

const SanityContext = createContext<SanityContextType | null>(null);

const initialState: SanityState = {
  data: {},
  loaded: false,
  error: null
};

interface SanityProviderProps {
  children: ReactNode;
  sanityClient: SanityClient;
  slug: string;
}

export const SanityProvider = ({ children, sanityClient, slug }: SanityProviderProps) => {
  const [state, dispatch] = useReducer(sanityReducer, initialState);

  useEffectOnce(() => {
    const getPageData = async () => {
      try {
        const result = await sanityClient.fetch(query, { slug });

        dispatch({ type: actionTypes.SET_DATA, payload: result });
      } catch (error) {
        dispatch({ type: actionTypes.SET_ERROR, payload: error as Error });
      }
    };

    getPageData();
  });

  const value = useMemo(() => ({ state }), [state]);

  return <SanityContext.Provider value={value}>{children}</SanityContext.Provider>;
};

export const useSanity = (): SanityContextType => {
  const context = useContext(SanityContext);
  if (!context) {
    throw new Error('useSanity must be used within a SanityProvider');
  }
  return context;
};
