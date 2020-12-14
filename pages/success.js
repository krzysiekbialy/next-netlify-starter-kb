import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function Success() {
  return (
    <div>
      your form has been successfully submited!
      <Link href="/">
        <a>Go back home! </a>
      </Link>
    </div>
  );
}
