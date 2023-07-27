import React from "react";

function AboutPage() {
  return (
    <div className="AboutPage">
      <div className="container mt-5">
        <h1 className="text-primary mb-4">Welcome to KeyZoom!</h1>
        <h2>Our Vision</h2>
        <p>
          At KeyZoom, we aim to provide a seamless and reliable service that empowers
          users to regain access to their spare keys quickly and effortlessly. We
          envision being the go-to platform for individuals who want peace of mind and
          a reliable backup plan for those unexpected moments.
        </p>
        <h2>How KeyZoom Works</h2>
        <ol>
          <li>
            <strong>Registration and Secure Data Storage:</strong> KeyZoom allows users
            to sign up easily, providing their essential details. Your data is stored
            with the utmost security and confidentiality, ensuring that your information
            is protected at all times.
          </li>
          <li>
            <strong>Shipping Spare Keys:</strong> After registration, users can
            conveniently send their spare keys to our secure facility. Rest assured that
            your keys are in safe hands and will only be accessed during an emergency
            with your explicit permission.
          </li>
          <li>
            <strong>Requesting Spare Keys:</strong> In the event of an emergency or when
            you've lost your keys, simply log in to the KeyZoom app. With our seamless
            integration of Google Maps API, you can pinpoint your current location and
            request access to your spare keys.
          </li>
          <li>
            <strong>Easy Updates:</strong> Life changes, and so can your address or
            contact details. KeyZoom allows you to update your information at any time,
            ensuring that your spare keys always reach the right place.
          </li>
          <li>
            <strong>Adding Dependencies:</strong> You can add trusted family members or
            friends as dependencies on your KeyZoom account. This way, they can also
            request spare keys on your behalf when needed, providing an added layer of
            convenience and support.
          </li>
        </ol>
        <h2>Subscription and Pricing</h2>
        <p>
          KeyZoom offers a straightforward subscription plan to ensure you're always
          covered when emergencies strike. To take advantage of our services, there's a
          small monthly payment of 2 euros. Additionally, there's a one-time maintenance
          fee of 20 euros to keep our facilities in top-notch condition for you.
        </p>
        <h2>Technologies We Use</h2>
        <p>
          At KeyZoom, we pride ourselves on using cutting-edge technologies to provide
          a seamless user experience. Our platform is built with React, Node.js, and
          Express to ensure fast and efficient operations. The integration of Google
          Maps API enables accurate location services, making it easier for you to get
          your spare keys when you need them. We store your data securely and reliably
          using MongoDB, and we use Cloudinary to efficiently handle and manage
          multimedia files.
        </p>
        <h2>Meet the Founder</h2>
        <p>
          Hello! I'm Enoch Ampong, the founder of KeyZoom. My passion for providing
          practical solutions and ensuring peace of mind inspired the creation of this
          startup. I believe that every individual should have access to their spare
          keys during emergencies without stress, and KeyZoom is my way of making that
          vision a reality.
        </p>
        <h2>Get in Touch</h2>
        <p>
          Thank you for taking the time to learn about KeyZoom. If you have any
          questions, suggestions, or feedback, please feel free to reach out to me at{' '}
          <a href="mailto:enochampong0@gmail.com">enochampong0@gmail.com</a>. We're
          always excited to hear from our users and make KeyZoom even better with your
          input.
        </p>
        <p>
          Stay prepared with KeyZoom - Your spare keys, just a click away!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
