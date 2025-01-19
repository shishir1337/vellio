import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookies Policy | Vellio Properties Ltd',
  description: 'Learn about how Vellio Properties Ltd uses cookies on our website.',
}

export default function CookiesPolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-bodoni text-4xl md:text-5xl font-bold mb-8 text-[#00447D]">Cookies Policy</h1>
      <div className="prose max-w-none">
        <p>This Website may place and access certain Cookies on your computer. Vellio Properties Ltd uses Cookies to improve your experience of using the Website and to improve our range of products and services. Vellio Properties Ltd has carefully chosen these Cookies and has taken steps to ensure that your privacy is protected and respected at all times.</p>

        <p>All Cookies used by this Website are used in accordance with current UK and EU Cookie Law.</p>

        <p>Before the Website places Cookies on your computer, you will be presented with a message bar requesting your consent to set those Cookies. By giving your consent to the placing of Cookies, you are enabling Vellio Properties Ltd to provide a better experience and service to you. You may, if you wish, deny consent to the placing of Cookies; however certain features of the Website may not function fully or as intended.</p>

        <p>This Website may place the following Cookies:</p>

        <table className="w-full border-collapse mb-6">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 bg-gray-100">Type of Cookie</th>
              <th className="border border-gray-300 p-2 bg-gray-100">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Strictly necessary cookies</td>
              <td className="border border-gray-300 p-2">These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart or make use of e-billing services.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Analytical/performance cookies</td>
              <td className="border border-gray-300 p-2">They allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.</td>
            </tr>
          </tbody>
        </table>

        <ol className="list-decimal pl-6 space-y-4">
          <li>You can find a list of Cookies that we use in the Cookies Schedule.</li>
          <li>You can choose to enable or disable Cookies in your internet browser. By default, most internet browsers accept Cookies but this can be changed. For further details, please consult the help menu in your internet browser.</li>
          <li>You can choose to delete Cookies at any time; however you may lose any information that enables you to access the Website more quickly and efficiently including, but not limited to, personalisation settings.</li>
          <li>It is recommended that you ensure that your internet browser is up-to-date and that you consult the help and guidance provided by the developer of your internet browser if you are unsure about adjusting your privacy settings.</li>
          <li>For more information generally on cookies, including how to disable them, please refer to aboutcookies.org. You will also find details on how to delete cookies from your computer.</li>
        </ol>

        <p>Below is a list of the cookies that we use. We have tried to ensure this is complete and up to date, but if you think that we have missed a cookie or there is any discrepancy, please let us know.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Strictly necessary</h2>
        <p>We use the following strictly necessary cookies:</p>

        <table className="w-full border-collapse mb-6">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 bg-gray-100">Description of Cookie</th>
              <th className="border border-gray-300 p-2 bg-gray-100">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">session cookie</td>
              <td className="border border-gray-300 p-2">We use this session cookie to remember you and maintain your session whilst you are using our website.</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Analytical/performance</h2>
        <p>We use the following analytical/performance cookies:</p>

        <table className="w-full border-collapse mb-6">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 bg-gray-100">Description of Cookie</th>
              <th className="border border-gray-300 p-2 bg-gray-100">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Analytical or performance cookies</td>
              <td className="border border-gray-300 p-2">We use this cookie to help us analyse how users use the website.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

