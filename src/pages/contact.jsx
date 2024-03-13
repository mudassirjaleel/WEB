import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Accordion from 'react-bootstrap/Accordion';
import appData from "@data/app.json";
import { Formik } from 'formik';

const Contact = () => {
  const faqData = {
    "title": "Client’s FAQ",
    "subtitle": "Solving Business Problems <br>is An Everyday",
    "items": [
        {
            "title": "What services does DH Solutions offer for new clients?",
            "text": "We provide a range of services for new clients, from personalized consultations to determine your unique needs to tailored solutions for seamless integration. Visit the ‘Getting Started’ section to explore the onboarding process and discover how we can elevate your digital experience."
        },
        {
            "title": "Is there a demo or trial period available for your services?",
            "text": "Yes, we offer demos and trial periods for specific services. Check out the ‘Getting Started’ section for information on how to request a demo or trial, allowing you to experience the power of our solutions firsthand."
        },
        {
            "title": "Can i customize my services based on my business requirements?",
            "text": "Absolutely! DH Solutions prides itself on delivering tailor-made solutions. Explore the ‘Getting Started’ section to learn how our team collaborates with you to understand your business goals and customize our services accordingly."
        },
        {
            "title": "What documentation or information do i need to provide during the onboarding process?",
            "text": "The onboarding process may require basic information about your business, your objectives, and any existing systems. Refer to the ‘Getting Started’ section for a detailed checklist to ensure a smooth onboarding experience."
        },
        {
            "title": "How does DH Solutions ensure the security of my data?",
            "text": "We prioritize data security through robust encryption, regular audits, and compliance with industry standards. Visit the ‘Security and Privacy’ section for an in-depth look at our security measures and commitment to safeguarding your information."
        },
        {
            "title": "Is my personal information shared with third parties?",
            "text": "DH Solutions maintains strict confidentiality. Read our privacy policies in the ‘Security and Privacy’ section to understand how we handle personal information and ensure it remains secure within our systems."
        },
        {
            "title": "How often does DH Solutions conduct security assessments?",
            "text": "Security assessments are conducted regularly to identify and address potential vulnerabilities. Discover more about our proactive security measures in the ‘Security and Privacy’ section, demonstrating our commitment to continuous protection."
        }

    ]
  }

  return (
    <Layouts>
        <PageBanner pageTitle={"Contact Us"} pageDesc={"Have ideas for your business? Let’s build something awesome together."} />

        {/* Onovo Contact Info */}
        <section className="onovo-section gap-top-140">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">

                        {/* Heading */}
                        <div className="onovo-text gap-bottom-40">
                            <h4>Send Us A Message</h4>
                            Then let us know about it and we can see what we can do to help
                        </div>

                        {/* Form */}
                        <div className="onovo-form">
                        <Formik
                            initialValues = {{ email: '', name: '', tel: '', message: '' }}
                            validate = { values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                }
                                return errors;
                            }}
                            onSubmit = {( values, { setSubmitting } ) => {
                                const form = document.getElementById("contactForm");
                                const status = document.getElementById("contactFormStatus");
                                const data = new FormData();

                                data.append('name', values.name);
                                data.append('tel', values.tel);
                                data.append('email', values.email);
                                data.append('message', values.message);

                                fetch(form.action, {
                                    method: 'POST',
                                    body: data,
                                    headers: {
                                        'Accept': 'application/json'
                                    }
                                }).then(response => {
                                    if (response.ok) {
                                        status.innerHTML = "Thanks for your submission!";
                                        form.reset()
                                    } else {
                                        response.json().then(data => {
                                            if (Object.hasOwn(data, 'errors')) {
                                                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                                            } else {
                                                status.innerHTML = "Oops! There was a problem submitting your form"
                                            }
                                        })
                                    }
                                }).catch(error => {
                                    status.innerHTML = "Oops! There was a problem submitting your form"
                                });

                                setSubmitting(false);
                            }}
                            >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                            <form onSubmit={handleSubmit} id="contactForm" action={appData.settings.formspreeURL} className="cform" method="post">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="Full Name" 
                                              type="text" 
                                              name="name" 
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.name}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="Email Address" 
                                              type="email" 
                                              name="email" 
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.email}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="Phone Number" 
                                              type="tel" 
                                              name="tel" 
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.tel}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <textarea 
                                              placeholder="Message" 
                                              name="message"
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.message}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <button type="submit" className="onovo-btn onovo-hover-btn">
                                                <span>Send Message</span>
                                            </button>
                                        </p>
                                    </div>
                                </div>

                                <div className="form-status alert-success" id="contactFormStatus" />
                            </form>
                            )}
                            </Formik>
                        </div>

                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">

                        {/* Contact Info */}
                        <div className="onovo-contact-info onovo-text-white">
                            <ul>
                                <li>
                                    <h5>Contact Info</h5>
                                    <a href="tel:+ 12092314944" className="onovo-lnk lnk--white" target="_blank">+ 1 (209) 231 4944</a><br/>
                                    <a href="mailto:hello@digitalhouse.com.pk" className="onovo-lnk lnk--white" target="_blank">hello@digitalhouse.com.pk</a>
                                    
                                    <div className="onovo-social-1 onovo-social-active" style={{"marginTop": "10px"}}>
                                        <ul>
                                            {appData.social.map((item, key) => (
                                            <li key={`contact-social-item-${key}`}>
                                                <a href={item.link} target="_blank" className="onovo-social-link onovo-hover-2" title={item.title}>
                                                    <i className={`icon ${item.icon}`} />
                                                </a>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <h5>United States</h5>
                                    <div>1309 Coffeen Avenue STE 13600 Sheridan Wyoming 82801</div>
                                </li>
                                <li>
                                    <h5>Pakistan</h5>
                                    <div>Chak Shahzad , Islamabad </div>
                                </li>
                                
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        {/* Onovo Faq */}
        <section className="onovo-section gap-top-140">
            <div className="container">

                {/* Heading */}
                <div className="onovo-heading align-center gap-bottom-40">
                    <div className="onovo-subtitle-1">
                        <span>{faqData.title}</span>
                    </div>
                    <h2 className="onovo-title-2">
                        <span dangerouslySetInnerHTML={{ __html: faqData.subtitle }} />
                    </h2>
                </div>

                {/* Faq items */}
                <div className="onovo-faq-items">
                <Accordion defaultActiveKey="faq-acc-0">
                    {faqData.items.map((item, key) => (
                    <Accordion.Item key={`faq-item-${key}`} eventKey={`faq-acc-${key}`}>
                    <div key={`faq-item-${key}`} className="onovo-faq-item onovo-collapse-item">
                        <Accordion.Header>
                        <h5 className="title onovo-collapse-btn">
                            <span>{item.title}</span>
                            <i className="arrow" />
                        </h5>
                        </Accordion.Header>
                        <Accordion.Body>
                        <div className="onovo-text">
                            <div dangerouslySetInnerHTML={{ __html: item.text }} />
                        </div>
                        </Accordion.Body>
                    </div>
                    </Accordion.Item>
                    ))}
                </Accordion>
                </div>
                
            </div>
        </section>
      
    </Layouts>
  );
};
export default Contact;
