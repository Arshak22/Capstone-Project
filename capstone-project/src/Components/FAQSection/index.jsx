import React from "react";
import { useState } from "react";
import "./style.css";

export default function FAQSection({faqs}) {
    const [open, setOpen] = useState(false);
    const toggleFAQ = (index) => {
        faqs[index].open = !faqs[index].open;
        setOpen(!open);
    }
    return (
        <div className="FAQ">
            <h1>FAQ</h1>
            <div className="faqs">
                {faqs.map((faq, index) => {
                    return (
                        <div className={"faq" + (faqs[index].open ? " open": "")} key={index} onClick={() => toggleFAQ(index)}>
                            <div className="faqQuestion">
                                <h1>{faq.question}</h1>
                            </div>
                            <div className="faqAnswer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}