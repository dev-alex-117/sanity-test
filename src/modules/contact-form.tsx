import { z } from 'zod';
import { useState } from 'react';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    const formData = new FormData();
    formData.append('access_key', '7039170f-b80c-4a54-976d-6e770a715d3c');
    formData.append('name', values.name || '');
    formData.append('email', values.email || '');
    formData.append('message', values.message || '');
    formData.append('honeypot', '');

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
      .then(async (res) => {
        setIsSubmitting(false);
        if (res.ok) {
          setSuccessMessage('Thanks! Your message has been sent.');
          form.reset();
        } else {
          const json = await res.json();
          setErrorMessage(json.message || 'Something went wrong.');
        }
      })
      .catch(() => {
        setIsSubmitting(false);
        setErrorMessage('Network error. Please try again later.');
      });
  };


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

            <input className="hidden" type="text" name="honeypot" style={{ display: 'none' }} />

            {successMessage && (
              <p className="text-green-600 text-center font-medium">{successMessage}</p>
            )}

            {errorMessage && (
              <p className="text-red-600 text-center font-medium">{errorMessage}</p>
            )}

            <Button
              disabled={isSubmitting}
              className="flex w-full max-w-[380px] mx-auto cursor-pointer px-[2.25rem] py-[0.75rem] md:px-[3rem] md:py-[0.5rem] text-lg text-white border border-stone-700 bg-stone-700 hover:text-stone-700 hover:bg-stone-200 transition-colors duration-300 md:px-[1.5rem] md:p-3 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
