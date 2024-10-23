"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  fullName: z
    .string()
    .min(5, {
      message: "Your name must be at least 5 characters.",
    })
    .max(50, {
      message: "Your name must not be longer than 50 characters.",
    }),
  email: z.string().email(),
  message: z.string().min(50, {
    message: "Your message must be at least 50 characters.",
  }),
});

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [mailSubmitted, setMailSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const sendMail = (data: z.infer<typeof formSchema>) => {
    setOpen(!open);
    setMailSubmitted(!mailSubmitted);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    setTimeout(() => {
      setMailSubmitted(false);
    }, 5000);
  };

  return (
    <div
      className='relative z-0 flex items-center justify-center w-full mt-8 mb-24 overflow-hidden md:mb-28 md:mt-12 lg:mt-20'
      id='contact'
    >
      <div className='py-12 space-y-12'>
        <div className='container'>
          <div className='px-10 py-8 overflow-hidden text-center md:text-left bg-neutral-900 rounded-3xl lg:w-max'>
            <div className='flex flex-col items-center gap-8 space-y-2 md:gap-16 md:flex-rol'>
              <div className='flex flex-col gap-2'>
                <h2 className='text-2xl md:text-3xl'>
                  Let’s team up and create something amazing!
                </h2>
                <p className='text-sm md:text-base'>
                  Excited to bring your next project to life? Let’s connect and
                  explore how I can help you reach your goals.
                </p>
              </div>
              <div>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button
                      className='inline-flex items-center h-12 gap-2 px-6 rounded-lg shadow-sm text-neutral-900 bg-slate-200 w-max shadow-neutral-300 hover:bg-neutral-300'
                      disabled={mailSubmitted}
                    >
                      <ArrowUpRight className='size-4' />
                      <span className='font-semibold'>Contact Me</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className='sm:max-w-[26.56rem] bg-neutral-900 border-neutral-800/50'>
                    <DialogHeader>
                      <DialogTitle className='font-semibold'>
                        Contact Me
                      </DialogTitle>
                      <DialogDescription className='text-neutral-200/75'>
                        Feel free to reach out using the form below, and I’ll
                        get back to you as soon as possible.
                      </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(sendMail)}
                        className='-ml-1 space-y-8'
                      >
                        <FormField
                          control={form.control}
                          name='fullName'
                          render={({ field }) => (
                            <FormItem className='grid items-start justify-start grid-cols-1'>
                              <Label
                                htmlFor='fullName'
                                className='ml-1.5 text-left text-neutral-200'
                              >
                                Full Name
                              </Label>
                              <FormControl>
                                <Input
                                  className='border-neutral-800 text-neutral-200 placeholder:text-neutral-200/75 bg-neutral-950'
                                  placeholder='Your Full Name'
                                  type='text'
                                  required
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className='ml-1.5' />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name='email'
                          render={({ field }) => (
                            <FormItem className='grid items-start justify-start grid-cols-1'>
                              <Label
                                htmlFor='email'
                                className='ml-1.5 text-left text-neutral-200'
                              >
                                Your E-Mail
                              </Label>
                              <FormControl>
                                <Input
                                  className='border-neutral-800 text-neutral-200 placeholder:text-neutral-200/75 bg-neutral-950'
                                  placeholder='john.doe@example.com'
                                  type='email'
                                  required
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className='ml-1.5' />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name='message'
                          render={({ field }) => (
                            <FormItem className='grid items-start justify-start grid-cols-1'>
                              <Label
                                htmlFor='message'
                                className='ml-1.5 text-left text-neutral-200'
                              >
                                Message:
                              </Label>
                              <FormControl>
                                <Textarea
                                  placeholder='Have a question or an idea you&#39;d like to share?'
                                  className='resize-none border-neutral-800 text-neutral-200 placeholder:text-neutral-200/75 bg-neutral-950'
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className='ml-1.5' />
                            </FormItem>
                          )}
                        />
                        <Button
                          type='submit'
                          className='inline-flex items-center h-12 gap-2 px-6 ml-1.5 rounded-lg shadow-sm text-neutral-900 bg-slate-200 w-max shadow-neutral-300 hover:bg-neutral-300'
                        >
                          <ArrowUpRight className='size-4' />
                          <span className='font-semibold'>Send Mail</span>
                        </Button>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
