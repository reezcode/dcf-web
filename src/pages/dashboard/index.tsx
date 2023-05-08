import { EmptyLayout } from "@/components/layout";
import { Button } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

export default function index() {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const router = useRouter();
  useEffect(()=> {
        if(!cookies.user) {
            router.push('/404');
        }
  }, [cookies]);
  return (
    <EmptyLayout pageTitle="Dashboard">
        <p>Dashboard</p>
        <form onSubmit={() => {
          router.push('/');
          removeCookie('user');
        }} >
        <Button type="submit" className="bg-dcf-dark-brown">Log Out</Button>
        </form>
    </EmptyLayout>
  )
}
