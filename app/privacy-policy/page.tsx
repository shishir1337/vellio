import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Vellio Properties',
  description: 'Learn about how Vellio Properties collects, uses, and protects your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="font-bodoni text-4xl md:text-5xl font-bold mb-8 text-[#00447D] text-center">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none text-justify">
        <p>
          This privacy policy applies between you, the User of this Website and Vellio Properties Ltd, the owner and provider of this Website. Vellio Properties Ltd takes the privacy of your information very seriously. This privacy policy applies to our use of any and all Data collected by us or provided by you in relation to your use of the Website.
        </p>

        <p>
          This privacy policy should be read alongside, and in addition to, our Terms and Conditions, which can be found at: <a href="https://www.vellioproperties.com/terms-conditions" className="text-blue-600 hover:underline">www.vellioproperties.com/terms-conditions</a>.
        </p>

        <p className="font-bold">Please read this privacy policy carefully.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Definitions and interpretation</h2>
        <p className='font-semibold'>1. In this privacy policy, the following definitions are used:</p>

        <table className="w-full border-collapse mb-6">
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">Data</td>
              <td className="border border-gray-300 p-2">
                collectively all information that you submit to Vellio Properties Ltd via the Website. This definition incorporates, where applicable, the definitions provided in the Data Protection Laws;
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">Cookies</td>
              <td className="border border-gray-300 p-2">
                a small text file placed on your computer by this Website when you visit certain parts of the Website and/or when you use certain features of the Website. Details of the cookies used by this Website are set out in the clause below (Cookies);
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">Data Protection Laws</td>
              <td className="border border-gray-300 p-2">
                any applicable law relating to the processing of personal Data, including but not limited to the Directive 96/46/EC (Data Protection Directive) or the GDPR, and any national implementing laws, regulations and secondary legislation, for as long as the GDPR is effective in the UK;
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">GDPR</td>
              <td className="border border-gray-300 p-2">
                the General Data Protection Regulation (EU) 2016/679;
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">Vellio Properties Ltd, or us</td>
              <td className="border border-gray-300 p-2">
                Vellio Properties Ltd, a company incorporated in England and Wales with registered number 16033278 whose registered office is at 53 Rodney Cresent, Filton, Bristol BS34 7AF, United Kingdom;
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">UK and EU Cookie Law</td>
              <td className="border border-gray-300 p-2">
                the Privacy and Electronic Communications (EC Directive) Regulations 2003 as amended by the Privacy and Electronic Communications (EC Directive) (Amendment) Regulations 2011;
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">User or you</td>
              <td className="border border-gray-300 p-2">
                any third party that accesses the Website and is not either (i) employed by Vellio Properties Ltd and acting in the course of their employment or (ii) engaged as a consultant or otherwise providing services to Vellio Properties Ltd and accessing the Website in connection with the provision of such services; and
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">Website</td>
              <td className="border border-gray-300 p-2">
                the website that you are currently using, www.vellioproperties.com, and any sub-domains of this site unless expressly excluded by their own terms and conditions.
              </td>
            </tr>
          </tbody>
        </table>

        <p className='font-semibold'>2. In this privacy policy, unless the context requires a different interpretation:</p>
        <ul>
          <li>1. the singular includes the plural and vice versa;</li>
          <li>2. references to sub-clauses, clauses, schedules or appendices are to sub-clauses, clauses, schedules or appendices of this privacy policy;</li>
          <li>3. a reference to a person includes firms, companies, government entities, trusts and partnerships;</li>
          <li>4. "including" is understood to mean "including without limitation";</li>
          <li>5. reference to any statutory provision includes any modification or amendment of it;</li>
          <li>6. the headings and sub-headings do not form part of this privacy policy.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Scope of this privacy policy</h2>
        <p>
          3. This privacy policy applies only to the actions of Vellio Properties Ltd and Users with respect to this Website. It does not extend to any websites that can be accessed from this Website including, but not limited to, any links we may provide to social media websites.
        </p>
        <p>
          4. For purposes of the applicable Data Protection Laws, Vellio Properties Ltd is the "data controller". This means that Vellio Properties Ltd determines the purposes for which, and the manner in which, your Data is processed.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Data collected</h2>
        <p>5. We may collect the following Data, which includes personal Data, from you:</p>
        <ul>
          <li>1. name;</li>
          <li>2. date of birth;</li>
          <li>3. gender;</li>
          <li>4. job title;</li>
          <li>5. profession;</li>
          <li>6. contact Information such as email addresses and telephone numbers;</li>
          <li>7. demographic information such as postcode, preferences and interests;</li>
          <li>8. financial information such as credit / debit card numbers;</li>
          <li>9. IP address (automatically collected);</li>
          <li>10. web browser type and version (automatically collected);</li>
          <li>11. operating system (automatically collected);</li>
          <li>12. a list of URLs starting with a referring site, your activity on this Website, and the site you exit to (automatically collected);</li>
          <li>13. in each case, in accordance with this privacy policy.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How we collect Data</h2>
        <p>6. We collect Data in the following ways:</p>
        <ul>
          <li>1. data is given to us by you;</li>
          <li>2. data is received from other sources; and</li>
          <li>3. data is collected automatically.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Data that is given to us by you</h3>
        <p>7. Vellio Properties Ltd will collect your Data in a number of ways, for example:</p>
        <ul>
          <li>1. when you contact us through the Website, by telephone, post, e-mail or through any other means;</li>
          <li>2. when you register with us and set up an account to receive our products/services;</li>
          <li>3. when you complete surveys that we use for research purposes (although you are not obliged to respond to them);</li>
          <li>4. when you enter a competition or promotion through a social media channel;</li>
          <li>5. when you make payments to us, through this Website or otherwise;</li>
          <li>6. when you elect to receive marketing communications from us;</li>
          <li>7. when you use our services;</li>
        </ul>
        <p>in each case, in accordance with this privacy policy.</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Data that is received from third parties</h3>
        <p>8. Vellio Properties Ltd will receive Data about you from the following third parties:</p>
        <ul>
          <li>1. affiliate and sister companies;</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Data that is collected automatically</h3>
        <p>9. To the extent that you access the Website, we will collect your Data automatically, for example:</p>
        <ul>
          <li>1. we automatically collect some information about your visit to the Website. This information helps us to make improvements to Website content and navigation, and includes your IP address, the date, times and frequency with which you access the Website and the way you use and interact with its content.</li>
          <li>2. we will collect your Data automatically via cookies, in line with the cookie settings on your browser. For more information about cookies, and how we use them on the Website, see the section below, headed "Cookies".</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our use of Data</h2>
        <p>10. Any or all of the above Data may be required by us from time to time in order to provide you with the best possible service and experience when using our Website. Specifically, Data may be used by us for the following reasons:</p>
        <ul>
          <li>1. internal record keeping;</li>
          <li>2. improvement of our products / services;</li>
          <li>3. transmission by email of marketing materials that may be of interest to you;</li>
          <li>4. contact for market research purposes which may be done using email, telephone, fax or mail. Such information may be used to customise or update the Website;</li>
        </ul>
        <p>in each case, in accordance with this privacy policy.</p>

        <p>11. We may use your Data for the above purposes if we deem it necessary to do so for our legitimate interests. If you are not satisfied with this, you have the right to object in certain circumstances (see the section headed "Your rights" below).</p>

        <p>12. For the delivery of direct marketing to you via e-mail, we'll need your consent, whether via an opt-in or soft-opt-in:</p>
        <ul>
          <li>1. soft opt-in consent is a specific type of consent which applies when you have previously engaged with us (for example, you contact us to ask us for more details about a particular product/service, and we are marketing similar products/services). Under "soft opt-in" consent, we will take your consent as given unless you opt-out.</li>
          <li>2. for other types of e-marketing, we are required to obtain your explicit consent; that is, you need to take positive and affirmative action when consenting by, for example, checking a tick box that we'll provide.</li>
          <li>3. if you are not satisfied about our approach to marketing, you have the right to withdraw consent at any time. To find out how to withdraw your consent, see the section headed "Your rights" below.</li>
        </ul>

        <p>13. When you register with us and set up an account to receive our services, the legal basis for this processing is the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Who we share Data with</h2>
        <p>14. We may share your Data with the following groups of people for the following reasons:</p>
        <ul>
          <li>1. any of our group companies or affiliates – to ensure the proper administration of website and business;</li>
          <li>2. our employees, agents and/or professional advisors – to obtain advice from professional advisers, admin, research and marketing purposes;</li>
          <li>3. third party service providers who provide services to us which require the processing of personal data – to help third party service providers in receipt of any shared data to perform functions on our behalf to help ensure the website runs smoothly;</li>
          <li>4. third party payment providers who process payments made over the Website – to enable third party payment providers to process user payments and refunds;</li>
          <li>5. relevant authorities – to facilitate the detection and prevention of fraud, crime or the collection of taxes or duties;</li>
          <li>6. NinjaTrader – for the purpose of providing effective service .</li>
          <li>7. Kinetick – for the purpose of providing effective service.</li>
        </ul>
        <p>in each case, in accordance with this privacy policy.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Keeping Data secure</h2>
        <p>15. We will use technical and organisational measures to safeguard your Data, for example:</p>
        <ul>
          <li>1. access to your account is controlled by a password and a user name that is unique to you.</li>
          <li>2. we store your Data on secure servers.</li>
          <li>3. payment details are encrypted using SSL technology (typically you will see a lock icon or green address bar (or both) in your browser when we use this technology.</li>
        </ul>
        <p>16. Technical and organisational measures include measures to deal with any suspected data breach. If you suspect any misuse or loss or unauthorised access to your Data, please let us know immediately by contacting us via this e-mail address: support@vellioproperties.com.</p>
        <p>17. If you want detailed information from Get Safe Online on how to protect your information and your computers and devices against fraud, identity theft, viruses and many other online problems, please visit www.getsafeonline.org. Get Safe Online is supported by HM Government and leading businesses.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Data retention</h2>
        <p>18. Unless a longer retention period is required or permitted by law, we will only hold your Data on our systems for the period necessary to fulfil the purposes outlined in this privacy policy or until you request that the Data be deleted.</p>
        <p>19. Even if we delete your Data, it may persist on backup or archival media for legal, tax or regulatory purposes.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your rights</h2>
        <p>20. You have the following rights in relation to your Data:</p>
        <ul>
          <li><strong>1. Right to access</strong> – the right to request (i) copies of the information we hold about you at any time, or (ii) that we modify, update or delete such information. If we provide you with access to the information we hold about you, we will not charge you for this, unless your request is "manifestly unfounded or excessive." Where we are legally permitted to do so, we may refuse your request. If we refuse your request, we will tell you the reasons why.</li>
          <li><strong>2. Right to correct</strong> – the right to have your Data rectified if it is inaccurate or incomplete.</li>
          <li><strong>3. Right to erase</strong> – the right to request that we delete or remove your Data from our systems.</li>
          <li><strong>4. Right to restrict our use of your Data</strong> – the right to "block" us from using your Data or limit the way in which we can use it.</li>
          <li><strong>5. Right to data portability</strong> – the right to request that we move, copy or transfer your Data.</li>
          <li><strong>6. Right to object</strong> – the right to object to our use of your Data including where we use it for our legitimate interests.</li>
        </ul>
        <p>21. To make enquiries, exercise any of your rights set out above, or withdraw your consent to the processing of your Data (where consent is our legal basis for processing your Data), please contact us via this e-mail address: support@vellioproperties.com.</p>
        <p>22. If you are not satisfied with the way a complaint you make in relation to your Data is handled by us, you may be able to refer your complaint to the relevant data protection authority. For the UK, this is the Information Commissioner's Office (ICO). The ICO's contact details can be found on their website at https://ico.org.uk/.</p>
        <p>23. It is important that the Data we hold about you is accurate and current. Please keep us informed if your Data changes during the period for which we hold it.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Transfers outside the European Economic Area</h2>
        <p>24. Data which we collect from you may be stored and processed in and transferred to countries outside of the European Economic Area (EEA). For example, this could occur if our servers are located in a country outside the EEA or one of our service providers is situated in a country outside the EEA. We also share information with our group companies, some of which are located outside the EEA.</p>
        <p>25. We will only transfer Data outside the EEA where it is compliant with data protection legislation and the means of transfer provides adequate safeguards in relation to your data, eg by way of data transfer agreement, incorporating the current standard contractual clauses adopted by the European Commission, or by signing up to the EU-US Privacy Shield Framework, in the event that the organisation in receipt of the Data is based in the United States of America.</p>
        <p>26. To ensure that your Data receives an adequate level of protection, we have put in place appropriate safeguards and procedures with the third parties we share your Data with. This ensures your Data is treated by those third parties in a way that is consistent with the Data Protection Laws.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Links to other websites</h2>
        <p>27. This Website may, from time to time, provide links to other websites. We have no control over such websites and are not responsible for the content of these websites. This privacy policy does not extend to your use of such websites. You are advised to read the privacy policy or statement of other websites prior to using them.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes of business ownership and control</h2>
        <p>28. Vellio Properties Ltd may, from time to time, expand or reduce our business and this may involve the sale and/or the transfer of control of all or part of Vellio Properties Ltd. Data provided by Users will, where it is relevant to any part of our business so transferred, be transferred along with that part and the new owner or newly controlling party will, under the terms of this privacy policy, be permitted to use the Data for the purposes for which it was originally supplied to us.</p>
        <p>29. We may also disclose Data to a prospective purchaser of our business or any part of it.</p>
        <p>30. In the above instances, we will take steps with the aim of ensuring your privacy is protected.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies</h2>
        <p>31. This Website may place and access certain Cookies on your computer. Vellio Properties Ltd uses Cookies to improve your experience of using the Website and to improve our range of products and services. Vellio Properties Ltd has carefully chosen these Cookies and has taken steps to ensure that your privacy is protected and respected at all times.</p>
        <p>32. All Cookies used by this Website are used in accordance with current UK and EU Cookie Law.</p>
        <p>33. Before the Website places Cookies on your computer, you will be presented with a message bar requesting your consent to set those Cookies. By giving your consent to the placing of Cookies, you are enabling Vellio Properties Ltd to provide a better experience and service to you. You may, if you wish, deny consent to the placing of Cookies; however certain features of the Website may not function fully or as intended.</p>
        <p>34. This Website may place the following Cookies:</p>
        
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

        <p>35. You can find a list of Cookies that we use in the Cookies Schedule.</p>
        <p>36. You can choose to enable or disable Cookies in your internet browser. By default, most internet browsers accept Cookies but this can be changed. For further details, please consult the help menu in your internet browser.</p>
        <p>37. You can choose to delete Cookies at any time; however you may lose any information that enables you to access the Website more quickly and efficiently including, but not limited to, personalisation settings.</p>
        <p>38. It is recommended that you ensure that your internet browser is up-to-date and that you consult the help and guidance provided by the developer of your internet browser if you are unsure about adjusting your privacy settings.</p>
        <p>39. For more information generally on cookies, including how to disable them, please refer to aboutcookies.org. You will also find details on how to delete cookies from your computer.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">General</h2>
        <p>40. You may not transfer any of your rights under this privacy policy to any other person. We may transfer our rights under this privacy policy where we reasonably believe your rights will not be affected.</p>
        <p>41. If any court or competent authority finds that any provision of this privacy policy (or part of any provision) is invalid, illegal or unenforceable, that provision or part-provision will, to the extent required, be deemed to be deleted, and the validity and enforceability of the other provisions of this privacy policy will not be affected.</p>
        <p>42. Unless otherwise agreed, no delay, act or omission by a party in exercising any right or remedy will be deemed a waiver of that, or any other, right or remedy.</p>
        <p>43. This Agreement will be governed by and interpreted according to the law of England and Wales. All disputes arising under the Agreement will be subject to the exclusive jurisdiction of the English and Welsh courts.</p>
 
        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to this privacy policy</h2>
        <p>44. Vellio Properties Ltd reserves the right to change this privacy policy as we may deem necessary from time to time or as may be required by law. Any changes will be immediately posted on the Website and you are deemed to have accepted the terms of the privacy policy on your first use of the Website following the alterations.</p>
        <p>You may contact Vellio Properties Ltd by email at support@vellioproperties.com.</p>
      </div>
      <h3 className="text-xl font-semibold mt-6 mb-3">Strictly necessary</h3>
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

        <h3 className="text-xl font-semibold mt-6 mb-3">Analytical/performance</h3>
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
  )
}

