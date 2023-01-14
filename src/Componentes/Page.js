import React, { useRef } from 'react';

const Page = () => {

    const emailRef = useRef('');
    const descriptionRef = useRef('');
    const nameRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value
        const subject = event.target.subject.value
        const email = emailRef.current.value;
        const description = descriptionRef.current.value;

        console.log(name, subject, email, description)




        const contactDetails = {
            name: name,
            subject: subject,
            email: email,
            description: description
        }


        const url = `http://localhost:5000/contacts`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(contactDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    window.alert('feedback submited')
                }
                else {
                    window.alert('Something Wrong')
                }
            })

        event.target.reset();

    }


    return (
        <div className='w-50 mx-auto container border' style={{
            marginTop: '50px', backgroundImage: `url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <div>
                <div class="hero min-h-screen">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="text-center lg:text-left">
                            <h1 class="text-5xl font-bold">Contact Me!</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit} class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input ref={nameRef} type="name" name="name" class="form-control border" id="floatingInput" placeholder="Name" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Subject</span>
                                    </label>
                                    <input type="subject" name="subject" class="form-control border" id="floatingInput" placeholder="subject" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input ref={emailRef} type="email" name="email" class="form-control border" id="floatingInput" placeholder="Email" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Description</span>
                                    </label>
                                    <textarea ref={descriptionRef} type="description" name='description' class="form-control border" placeholder="Description" />
                                </div>
                                <input className='btn btn-primary mt-3' type="submit" value="Send Mail" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <a href="http://localhost:5000/contacts" className='btn btn-secondary'>view</a>
        </div>
    );
};

export default Page;