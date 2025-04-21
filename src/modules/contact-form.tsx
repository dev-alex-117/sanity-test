import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form';
import { Input } from '@/components/input';
import { Textarea } from '@/components/textarea';

type ContactFormProps = {
  title: string;
  nameField: {
    label: string;
    placeholder: string;
    required: boolean;
  };
  emailField: {
    label: string;
    placeholder: string;
    required: boolean;
  };
  messageField: {
    label: string;
    placeholder: string;
    required: boolean;
  };
};

export function ContactForm(props: ContactFormProps) {
  // Dynamically create the Zod schema based on required flags
  const formSchema = z.object({
    name: props.nameField.required
      ? z.string().min(2, { message: 'Name must be at least 2 characters' }).max(50, { message: 'Name must be less than 50 characters' })
      : z.string().optional(),

    email: props.emailField.required
      ? z.string().email({ message: 'Invalid email address' })
      : z.string().optional(),

    message: props.messageField.required
      ? z.string().min(10, { message: 'Message must be at least 10 characters' }).max(500, { message: 'Message must be less than 500 characters' })
      : z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="py-[2rem] px-[1rem] bg-neutral-100">
      <div className="max-w-[767px] mx-auto flex flex-col gap-[2rem]">
        <h2 className="text-4xl w-full font-light text-center">
          {props.title}
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{props.nameField.label}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={props.nameField.placeholder}
                      className="bg-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{props.emailField.label}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={props.emailField.placeholder}
                      className="bg-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{props.messageField.label}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={props.messageField.placeholder}
                      className="bg-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="flex w-full max-w-[380px] mx-auto cursor-pointer px-[2.25rem] py-[0.75rem] md:px-[3rem] md:py-[0.5rem] text-lg text-white border border-stone-700 bg-stone-700 hover:text-stone-700 hover:bg-stone-200 transition-colors duration-300 md:px-[1.5rem] md:p-3"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
