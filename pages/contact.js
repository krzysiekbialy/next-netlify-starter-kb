import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  let [count, setCount] = useState(0);
  return (
    <div className="container">
      <main>
        <div>This is the count {count}</div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Subtrack
        </button>
        <form
          name="contact"
          action="/success"
          method="POST"
          data-netlify="true"
        >
          <input
            type="hidden"
            name="form-name"
            value="contact"
            data-netlify="true"
          />
          <p>
            <label htmlFor="yourname">Your Name:</label>
            <input type="text" name="name" id="yourname" />
          </p>
          <p>
            <label htmlFor="youremail">Your Email: </label>{" "}
            <input type="email" name="email" id="youremail" />
          </p>
          <p>
            <label htmlFor="yourmessage">Message: </label>
            <textarea name="message" id="yourmessage"></textarea>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </main>

      <Footer />

      <style jsx>
        {`
          .container {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            algin-items: center;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .pointer {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}
