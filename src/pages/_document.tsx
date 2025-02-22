import { Html, Head, Main, NextScript } from "next/document";
import {Analytics} from "@vercel/analytics/react";

export default function Document() {
  return (
    <Html lang="en">
        <Head className={"dark"}>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet"/>
            <title>Sushil Kainth</title>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        <Analytics />
        </body>
    </Html>
  );
}
