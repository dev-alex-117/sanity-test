import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form';
import { Input } from '@/components/input';
import { Textarea } from '@/components/textarea';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }).max(50, { message: 'Name must be less than 50 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }).max(500, { message: 'Message must be less than 500 characters' }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="py-[2rem] px-[1rem] bg-neutral-100">
      <div className="max-w-[767px] mx-auto flex flex-col gap-[2rem]">
        <h2 className="text-4xl w-full font-light text-center">
          Contact Me
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Smith" className="bg-white" {...field} />
                  </FormControl>
                  {form.formState.errors.name && <FormMessage>Name is required and must be at least 2 characters</FormMessage>}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john.smith@example.com" className="bg-white" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Your message" className="bg-white" {...field} />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>Tell me what you need.</FormDescription>
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
