import { ReactElement, useState } from "react";
import classnames from "classnames/bind";
import Head from "next/head";
import DefaultLayout from "@src/layouts/DefaultLayout/DefaultLayout";
import style from "./asks.module.css";
import { Button, Question } from "@src/components";
const cx = classnames.bind(style);

const Asks = () => {
  const [questions, setQuestions] = useState([
    {
      title: "Is growing Cannabis legal?",
      content:
        "Growing cannabis is legal in many parts of the United States. Amounts vary. You should check whether or not it is legal in your state. Legal Intended Use of Product TheBudGrower.com is intended to help consumers get started with the growing of legal plants and herbs, including marijuana in states where it is legal to grow. All the products sold by TheBudGrower are absolutely legal in all states and location in the United States. The legal environment is constantly changing and TheBudGrower makes offers no legal advice as to the legality of how you choose to use the products you purchase. By purchasing products from TheBudGrower you hereby acknowledge that you will be using these products for legal purposes only.",
    },
    {
      title: "What can I grow with my kit?",
      content:
        "Growing cannabis is legal in many parts of the United States. Amounts vary. You should check whether or not it is legal in your state. Legal Intended Use of Product TheBudGrower.com is intended to help consumers get started with the growing of legal plants and herbs, including marijuana in states where it is legal to grow. All the products sold by TheBudGrower are absolutely legal in all states and location in the United States. The legal environment is constantly changing and TheBudGrower makes offers no legal advice as to the legality of how you choose to use the products you purchase. By purchasing products from TheBudGrower you hereby acknowledge that you will be using these products for legal purposes only.",
    },
    {
      title: "Where can I buy seed and clones?",
      content:
        "Growing cannabis is legal in many parts of the United States. Amounts vary. You should check whether or not it is legal in your state. Legal Intended Use of Product TheBudGrower.com is intended to help consumers get started with the growing of legal plants and herbs, including marijuana in states where it is legal to grow. All the products sold by TheBudGrower are absolutely legal in all states and location in the United States. The legal environment is constantly changing and TheBudGrower makes offers no legal advice as to the legality of how you choose to use the products you purchase. By purchasing products from TheBudGrower you hereby acknowledge that you will be using these products for legal purposes only.",
    },
    {
      title: "How difficult is it to start growing your own plants?",
      content:
        "Growing cannabis is legal in many parts of the United States. Amounts vary. You should check whether or not it is legal in your state. Legal Intended Use of Product TheBudGrower.com is intended to help consumers get started with the growing of legal plants and herbs, including marijuana in states where it is legal to grow. All the products sold by TheBudGrower are absolutely legal in all states and location in the United States. The legal environment is constantly changing and TheBudGrower makes offers no legal advice as to the legality of how you choose to use the products you purchase. By purchasing products from TheBudGrower you hereby acknowledge that you will be using these products for legal purposes only.",
    },
    {
      title:
        "Once I get started, how will I know if I’m doing everything right?",
      content:
        "Growing cannabis is legal in many parts of the United States. Amounts vary. You should check whether or not it is legal in your state. Legal Intended Use of Product TheBudGrower.com is intended to help consumers get started with the growing of legal plants and herbs, including marijuana in states where it is legal to grow. All the products sold by TheBudGrower are absolutely legal in all states and location in the United States. The legal environment is constantly changing and TheBudGrower makes offers no legal advice as to the legality of how you choose to use the products you purchase. By purchasing products from TheBudGrower you hereby acknowledge that you will be using these products for legal purposes only.",
    },
    {
      title: "What are the advantages of growing your own?",
      content:
        "Growing cannabis is legal in many parts of the United States. Amounts vary. You should check whether or not it is legal in your state. Legal Intended Use of Product TheBudGrower.com is intended to help consumers get started with the growing of legal plants and herbs, including marijuana in states where it is legal to grow. All the products sold by TheBudGrower are absolutely legal in all states and location in the United States. The legal environment is constantly changing and TheBudGrower makes offers no legal advice as to the legality of how you choose to use the products you purchase. By purchasing products from TheBudGrower you hereby acknowledge that you will be using these products for legal purposes only.",
    },
    {
      title: "How much is shipping and how will my grow kit be delivered?",
      content:
        "Growing cannabis is legal in many parts of the United States. Amounts vary. You should check whether or not it is legal in your state. Legal Intended Use of Product TheBudGrower.com is intended to help consumers get started with the growing of legal plants and herbs, including marijuana in states where it is legal to grow. All the products sold by TheBudGrower are absolutely legal in all states and location in the United States. The legal environment is constantly changing and TheBudGrower makes offers no legal advice as to the legality of how you choose to use the products you purchase. By purchasing products from TheBudGrower you hereby acknowledge that you will be using these products for legal purposes only.",
    },
    {
      title: "What if I’ve never done this before?",
      content:
        "Growing cannabis is legal in many parts of the United States. Amounts vary. You should check whether or not it is legal in your state. Legal Intended Use of Product TheBudGrower.com is intended to help consumers get started with the growing of legal plants and herbs, including marijuana in states where it is legal to grow. All the products sold by TheBudGrower are absolutely legal in all states and location in the United States. The legal environment is constantly changing and TheBudGrower makes offers no legal advice as to the legality of how you choose to use the products you purchase. By purchasing products from TheBudGrower you hereby acknowledge that you will be using these products for legal purposes only.",
    },
    {
      title: "Why do I want a carbon filter?",
      content:
        "Growing cannabis is legal in many parts of the United States. Amounts vary. You should check whether or not it is legal in your state. Legal Intended Use of Product TheBudGrower.com is intended to help consumers get started with the growing of legal plants and herbs, including marijuana in states where it is legal to grow. All the products sold by TheBudGrower are absolutely legal in all states and location in the United States. The legal environment is constantly changing and TheBudGrower makes offers no legal advice as to the legality of how you choose to use the products you purchase. By purchasing products from TheBudGrower you hereby acknowledge that you will be using these products for legal purposes only.",
    },
  ]);
  return (
    <>
      <Head>
        <title>Homebud</title>
      </Head>
      <div className={cx("wrapper")}>
        <h2 className={cx("title")}>Frequently Asked Questions</h2>
        <p className={cx("content")}>
          Everything you need to know about how growing works. Can’t find the
          answer you’re looking for? Please chat to our friendly team.
        </p>
        <div className={cx("questions")}>
          {questions.map((item, index) => (
            <Question
              title={item.title}
              content={item.content}
              key={index.toString()}
            />
          ))}
        </div>
        <div className={cx("chat-tag")}>
          <div>
            <div className={cx("image")}></div>
            <div className={cx("text")}>
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                Still have questions?
              </p>
              <p
                style={{
                  fontSize: "18px",
                }}
              >
                Can’t find the answer you're looking for? Please chat to our
                friendly team.
              </p>
            </div>
          </div>
          <Button type="green">Get in Touch</Button>
        </div>
      </div>
    </>
  );
};

Asks.getLayout = function getLayout(Asks: ReactElement) {
  return <DefaultLayout>{Asks}</DefaultLayout>;
};

export default Asks;
