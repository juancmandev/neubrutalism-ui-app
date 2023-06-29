'use client';

import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from './Button';

export default function NewsLetterForm() {
  const [submitting, setSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Your name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Your email is required'),
    }),
    onSubmit: async ({ name, email }) => {
      setSubmitting(true);

      try {
        const res = await fetch('/api/mailerLite', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email }),
        });
        const data = await res.json();

        if (data.status === 'ok') {
          alert('You have successfully subscribed!');
        } else {
          alert('Error when trying to subscribe...');
        }
      } catch (error) {
        alert('Error when trying to subscribe...');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>
      <section>
        <input
          id='name'
          required
          type='text'
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder='Your name'
          className='w-full px-4 py-2 text-lg bg-white border-2 border-black focus:border-pink outline-none'
        />
      </section>
      <section>
        <input
          id='email'
          required
          type='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder='Your email'
          className='w-full px-4 py-2 text-lg bg-white border-2 border-black focus:border-softPurple outline-none'
        />
      </section>
      <Button disabled={submitting} type='submit' className='w-full bg-orange'>
        {submitting ? 'Subscribing...' : 'Subscribe'}
      </Button>
    </form>
  );
}
