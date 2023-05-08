import { EmptyLayout } from "@/components/layout";
import Link from "next/link";

export default function Error404() {
  return (
  <EmptyLayout pageTitle="404 Page Not Found">
    <section className="flex items-center justify-center h-full p-16 dark:bg-gray-900 dark:text-gray-100 m-font">
    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div className="max-w-md text-center">
        <h2 className="mb-8 font-extrabold text-9xl text-slate-400 dark:text-gray-600">
          <span className="sr-only">Error</span>404
        </h2>
        <p className="text-2xl font-semibold md:text-3xl text-slate-700">Sorry, we couldn't find this page.</p>
        <p className="mt-4 mb-8 dark:text-gray-400 text-slate-700">But dont worry, you can find plenty of other things on our homepage.</p>
        <Link rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold text-white rounded-lg bg-dcf-dark-brown dark:bg-violet-400 dark:text-gray-900">Back to homepage</Link>
      </div>
    </div>
  </section>
  </EmptyLayout>
  )
}
