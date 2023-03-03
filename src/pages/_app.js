/** @format */

import "@/styles/globals.css";
import "@/styles/components/Header/Header.scss";
import "@/styles/components/Sidebar/Sidebar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useRouter } from "next/router";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect } from "react";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`)
      NProgress.start()
    }

    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])
  return <Component {...pageProps} />;
}
