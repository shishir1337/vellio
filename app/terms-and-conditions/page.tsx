import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the terms and conditions for using Vellio Properties Ltd services and website.",
};

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="font-bodoni text-4xl md:text-5xl font-bold mb-8 text-[#00447D] text-center">
        Terms and Conditions
      </h1>
      <div className="prose prose-lg max-w-none text-justify">
        <h2 className="text-3xl font-semibold mt-8 mb-4 text-center">
          Terms and conditions of use
        </h2>

        <h3 className="text-2xl font-semibold mt-6 mb-3">Introduction</h3>
        <p>
          These terms and conditions apply between you, the User of this Website
          (including any sub-domains, unless expressly excluded by their own
          terms and conditions), and Vellio Properties Ltd, the owner and
          operator of this Website. Please read these terms and conditions
          carefully, as they affect your legal rights. Your agreement to comply
          with and be bound by these terms and conditions is deemed to occur
          upon your first use of the Website. If you do not agree to be bound by
          these terms and conditions, you should stop using the Website
          immediately.
        </p>
        <br />
        <p>
          In these terms and conditions, <strong>User</strong> or{" "}
          <strong>Users</strong> means any third party that accesses the Website
          and is not either (i) employed by Vellio Properties Ltd and acting in
          the course of their employment or (ii) engaged as a consultant or
          otherwise providing services to Vellio Properties Ltd and accessing
          the Website in connection with the provision of such services.
        </p>
        <br />
        <p>
          You must be at least 18 years of age to use this Website. By using the
          Website and agreeing to these terms and conditions, you represent and
          warrant that you are at least 18 years of age.
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-3">
          Intellectual property and acceptable use
        </h3>
        <ol className="pl-6 space-y-4">
          <li>
            1. All Content included on the Website, unless uploaded by Users, is
            the property of Vellio Properties Ltd, our affiliates or other
            relevant third parties. In these terms and conditions, Content means
            any text, graphics, images, audio, video, software, data
            compilations, page layout, underlying code and software and any
            other form of information capable of being stored in a computer that
            appears on or forms part of this Website, including any such content
            uploaded by Users. By continuing to use the Website you acknowledge
            that such Content is protected by copyright, trademarks, database
            rights and other intellectual property rights. Nothing on this site
            shall be construed as granting, by implication, estoppel, or
            otherwise, any license or right to use any trademark, logo or
            service mark displayed on the site without the owner's prior written
            permission
          </li>
          <li>
            2. You may, for your own personal, non-commercial use only, do the
            following:
            <ol className="list-lower-alpha pl-6 space-y-2">
              <li>
                1. retrieve, display and view the Content on a computer screen
              </li>
              <li>
                2. download and store the Content in electronic form on a disk
                (but not on any server or other storage device connected to a
                network)
              </li>
            </ol>
          </li>
          <li>
            3. You must not otherwise reproduce, modify, copy, distribute or use
            for commercial purposes any Content without the written permission
            of Vellio Properties Ltd.
          </li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 mb-3">Prohibited use</h3>
        <ul>
          <li className="mb-4">
            4. You may not use the Website for any of the following purposes:
          </li>
          <ul className="list-lower-alpha pl-6 space-y-2">
            <li>
              1. in any way which causes, or may cause, damage to the Website or
              interferes with any other person's use or enjoyment of the
              Website;
            </li>
            <li>
              2. in any way which is harmful, unlawful, illegal, abusive,
              harassing, threatening or otherwise objectionable or in breach of
              any applicable law, regulation, governmental order;
            </li>
            <li>
              3. making, transmitting or storing electronic copies of Content
              protected by copyright without the permission of the owner.
            </li>
          </ul>
        </ul>

        <h3 className="text-2xl font-semibold mt-6 mb-3">Registration</h3>
        <ul className=" pl-6 space-y-4">
          <li>
            5. You must ensure that the details provided by you on registration
            or at any time are correct and complete.
          </li>
          <li>
            6. You must inform us immediately of any changes to the information
            that you provide when registering by updating your personal details
            to ensure we can communicate with you effectively.
          </li>
          <li>
            7. We may suspend or cancel your registration with immediate effect
            for any reasonable purposes or if you breach these terms and
            conditions.
          </li>
          <li>
            8. You may cancel your registration at any time by informing us in
            writing to the address at the end of these terms and conditions. If
            you do so, you must immediately stop using the Website. Cancellation
            or suspension of your registration does not affect any statutory
            rights.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6 mb-3">
          Password and security
        </h3>
        <ol className="pl-6 space-y-4">
          <li>
            9. When you register on this Website, you will be asked to create a
            password, which you should keep confidential and not disclose or
            share with anyone.
          </li>
          <li>
            10. If we have reason to believe that there is or is likely to be
            any misuse of the Website or breach of security, we may require you
            to change your password or suspend your account.
          </li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 mb-3">
          Links to other websites
        </h3>
        <ol className="pl-6 space-y-4">
          <li>
            11. This Website may contain links to other sites. Unless expressly
            stated, these sites are not under the control of Vellio Properties
            Ltd or that of our affiliates.
          </li>
          <li>
            12. We assume no responsibility for the content of such Websites and
            disclaim liability for any and all forms of loss or damage arising
            out of the use of them.
          </li>
          <li>
            13. The inclusion of a link to another site on this Website does not
            imply any endorsement of the sites themselves or of those in control
            of them.
          </li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 mb-3">
          Privacy Policy and Cookies Policy
        </h3>
        <ol className="pl-6 space-y-4">
          <li>
            14. Use of the Website is also governed by our Privacy Policy and
            Cookies Policy, which are incorporated into these terms and
            conditions by this reference. To view the Privacy Policy and Cookies
            Policy, please click on the following:{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              www.vellioproperties.com/privacy
            </Link>{" "}
            and{" "}
            <Link href="/cookies" className="text-blue-600 hover:underline">
              www.vellioproperties.com/cookies
            </Link>
            .
          </li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 mb-3">
          Availability of the Website and disclaimers
        </h3>
        <ol className="pl-6 space-y-4">
          <li>
            15. Any online facilities, tools, services or information that
            Vellio Properties Ltd makes available through the Website (the{" "}
            <strong>Service</strong>) is provided "as is" and on an "as
            available" basis. We give no warranty that the Service will be free
            of defects and/or faults. To the maximum extent permitted by the
            law, we provide no warranties (express or implied) of fitness for a
            particular purpose, accuracy of information, compatibility and
            satisfactory quality. Vellio Properties Ltd is under no obligation
            to update information on the Website.
          </li>
          <li>
            16. Whilst Vellio Properties Ltd uses reasonable endeavours to
            ensure that the Website is secure and free of errors, viruses and
            other malware, we give no warranty or guaranty in that regard and
            all Users take responsibility for their own security, that of their
            personal details and their computers.
          </li>
          <li>
            17. Vellio Properties Ltd accepts no liability for any disruption or
            non-availability of the Website.
          </li>
          <li>
            18. Vellio Properties Ltd reserves the right to alter, suspend or
            discontinue any part (or the whole of) the Website including, but
            not limited to, any products and/or services available. These terms
            and conditions shall continue to apply to any modified version of
            the Website unless it is expressly stated otherwise.
          </li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 mb-3">
          Limitation of liability
        </h3>
        <ol className="pl-6 space-y-4">
          <li>
            19. Nothing in these terms and conditions will: (a) limit or exclude
            our or your liability for death or personal injury resulting from
            our or your negligence, as applicable; (b) limit or exclude our or
            your liability for fraud or fraudulent misrepresentation; or (c)
            limit or exclude any of our or your liabilities in any way that is
            not permitted under applicable law.
          </li>
          <li>
            20. To the extent that the Website and Content are provided free of
            charge, we will not be liable to you for any loss or damage of any
            kind.
          </li>
          <li>
            21. We will not be liable to you in respect of any losses arising
            out of events beyond our reasonable control.
          </li>
          <li>
            22. To the maximum extent permitted by law, Vellio Properties Ltd
            accepts no liability for any of the following:
            <ol className="list-lower-alpha pl-6 space-y-2">
              <li>
                any business losses, such as loss of profits, income, revenue,
                anticipated savings, business, contracts, goodwill or commercial
                opportunities;
              </li>
              <li>loss or corruption of any data, database or software;</li>
              <li>any special, indirect or consequential loss or damage.</li>
            </ol>
          </li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 mb-3">General</h3>
        <ol className="pl-6 space-y-4">
          <li>
            23. You may not transfer any of your rights under these terms and
            conditions to any other person. We may transfer our rights under
            these terms and conditions where we reasonably believe your rights
            will not be affected.
          </li>
          <li>
            24. These terms and conditions may be varied by us from time to
            time. Such revised terms will apply to the Website from the date of
            publication. Users should check the terms and conditions regularly
            to ensure familiarity with the then current version.
          </li>
          <li>
            25. These terms and conditions together with the Privacy Policy and
            Cookies Policy contain the whole agreement between the parties
            relating to its subject matter and supersede all prior discussions,
            arrangements or agreements that might have taken place in relation
            to the terms and conditions.
          </li>
          <li>
            26. The Contracts (Rights of Third Parties) Act 1999 shall not apply
            to these terms and conditions and no third party will have any right
            to enforce or rely on any provision of these terms and conditions.
          </li>
          <li>
            27. If any court or competent authority finds that any provision of
            these terms and conditions (or part of any provision) is invalid,
            illegal or unenforceable, that provision or part-provision will, to
            the extent required, be deemed to be deleted, and the validity and
            enforceability of the other provisions of these terms and conditions
            will not be affected.
          </li>
          <li>
            28. Unless otherwise agreed, no delay, act or omission by a party in
            exercising any right or remedy will be deemed a waiver of that, or
            any other, right or remedy.
          </li>
          <li>
            29. This Agreement shall be governed by and interpreted according to
            the law of England and Wales and all disputes arising under the
            Agreement (including non-contractual disputes or claims) shall be
            subject to the exclusive jurisdiction of the English and Welsh
            courts.
          </li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 mb-3">
          Vellio Properties Ltd details
        </h3>
        <p>
          30. Vellio Properties Ltd is a company incorporated in England and
          Wales with registered number 16033278 whose registered address is 53
          Rodney Crescent, Filton, Bristol BS34 7AF, United Kingdom and it
          operates the Website vellioproperties.com.
        </p>
        <p>
          You can contact Vellio Properties Ltd by email on{" "}
          <a
            href="mailto:support@vellioproperties.com"
            className="text-blue-600 hover:underline"
          >
            support@vellioproperties.com
          </a>
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-4 text-center">
          Terms and conditions for sale of goods to consumers
        </h2>
        <p className="font-bold">Please read all these terms and conditions.</p>
        <br />
        <p>
          As we can accept your order and make a legally enforceable
          agreement without further reference to you, you must read these terms
          and conditions to make sure that they contain all that you want and
          nothing that you are not happy with.
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-3">Application</h3>
        <ol className="pl-6 space-y-4">
          <li>
            1. These Terms and Conditions will apply to the purchase of the
            goods by you (the <strong>Customer</strong> or <strong>you</strong>
            ). We are Vellio Properties Ltd a company registered in England and
            Wales under number 16033278 whose registered office is at 53 Rodney
            Crescent, Filton, Bristol BS34 7AF, United Kingdom with email
            address{" "}
            <a
              href="mailto:support@vellioproperties.com"
              className="text-blue-600 hover:underline"
            >
              support@vellioproperties.com
            </a>
            ; (the <strong>Supplier</strong> or <strong>us</strong> or{" "}
            <strong>we</strong>).
          </li>
          <li>
            2. These are the terms on which we sell all Goods to you. By
            ordering any of the Goods, you agree to be bound by these Terms and
            Conditions. By ordering any of the Services, you agree to be bound
            by these Terms and Conditions. You can only purchase the Goods from
            the Website if you are eligible to enter into a contract and are at
            least 18 years old.
          </li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 mb-3">Interpretation</h3>
        <ol className="pl-6 space-y-4">
          <li>
            <strong>3. Consumer</strong> means an individual acting for purposes
            which are wholly or mainly outside his or her trade, business, craft
            or profession;
          </li>
          <li>
            <strong>4. Contract</strong> means the legally-binding agreement
            between you and us for the supply of the Goods;
          </li>
          <li>
            <strong>5. Delivery Location</strong> means the Supplier's premises
            or other location where the Goods are to be supplied, as set out in
            the Order;
          </li>
          <li>
            <strong>6. Durable Medium</strong> means paper or email, or any
            other medium that allows information to be addressed personally to
            the recipient, enables the recipient to store the information in a
            way accessible for future reference for a period that is long enough
            for the purposes of the information, and allows the unchanged
            reproduction of the information stored;
          </li>
          <li>
            <strong>7. Goods</strong> means the goods advertised on the Website
            that we supply to you of the number and description as set out in
            the Order;
          </li>
          <li>
            <strong>8. Order</strong> means the Customer's order for the Goods
            from the Supplier as submitted following the step by step process
            set out on the Website;
          </li>
          <li>
            <strong>9. Privacy Policy</strong> means the terms which set out how
            we will deal with confidential and personal information received
            from you via the Website;
          </li>
          <li>
            <strong>10. Website</strong> means our website vellioproperties.com
            on which the Goods are advertised.
          </li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 mb-3">Goods</h3>
        <ol className="pl-6 space-y-4">
          <li>
            11. The description of the Goods is as set out in the Website,
            catalogues, brochures or other form of advertisement. Any
            description is for illustrative purposes only and there may be small
            discrepancies in the size and colour of the Goods supplied.
          </li>
          <li>
            12. In the case of any Goods made to your special requirements, it
            is your responsibility to ensure that any information or
            specification you provide is accurate.
          </li>
          <li>
            13. All Goods which appear on the Website are subject to
            availability.
          </li>
          <li>
            14. We can make changes to the Goods which are necessary to comply
            with any applicable law or safety requirement. We will notify you of
            these changes.
          </li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 mb-3">
          Personal information and Registration
        </h3>
        <ol className="pl-6 space-y-4">
          <li>
            15. When registering to use the Website you must set up a username
            and password. You remain responsible for all actions taken under the
            chosen username and password and undertake not to disclose your
            username and password to anyone else and keep them secret.
          </li>
          <li>
            16. We retain and use all information strictly under the Privacy
            Policy.
          </li>
          <li>
            17. We may contact you by using e-mail or other electronic
            communication methods and by pre-paid post and you expressly agree
            to this.
          </li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 mb-3">Basis of Sale</h3>
        <ol className="pl-6 space-y-4">
          <li>
            18. The description of the Goods in our website does not constitute
            a contractual offer to sell the Goods. When an Order has been
            submitted on the Website, we can reject it for any reason, although
            we will try to tell you the reason without delay.
          </li>
          <li>
            19. The Order process is set out on the Website. Each step allows
            you to check and amend any errors before submitting the Order. It is
            your responsibility to check that you have used the ordering process
            correctly.
          </li>
          <li>
            20. A Contract will be formed for the sale of Goods ordered only
            when you receive an email from us confirming the Order (
            <strong>Order Confirmation</strong>). You must ensure that the Order
            Confirmation is complete and accurate and inform us immediately of
            any errors. We are not responsible for any inaccuracies in the Order
            placed by you. By placing an Order you agree to us giving you
            confirmation of the Contract by means of an email with all
            information in it (ie the Order Confirmation). You will receive the
            Order Confirmation within a reasonable time after making the
            Contract, but in any event not later than the delivery of any Goods
            supplied under the Contract.
          </li>
          <li>
            21. Any quotation is valid for a maximum period of 14 days from its
            date, unless we expressly withdraw it at an earlier time.
          </li>
          <li>
            22. No variation of the Contract, whether about description of the
            Goods, Fees or otherwise, can be made after it has been entered into
            unless the variation is agreed by the Customer and the Supplier in
            writing.
          </li>
          <li>
            23. We intend that these Terms and Conditions apply only to a
            Contract entered into by you as a Consumer. If this is not the case,
            you must tell us, so that we can provide you with a different
            contract with terms which are more appropriate for you and which
            might, in some respects, be better for you, eg by giving you rights
            as a business.
          </li>
        </ol>
        <h3 className="text-2xl font-semibold mt-6 mb-3">Price and Payment</h3>
        <ol className="pl-6 space-y-4">
          <li>
            24. The price of the Goods and any additional delivery or other
            charges is that set out on the Website at the date of the Order or
            such other price as we may agree in writing.
          </li>
          <li>
            25. Prices and charges include VAT at the rate applicable at the
            time of the Order.
          </li>
          <li>
            26. You must pay by submitting your credit or debit card details
            with your Order and we can take payment immediately or otherwise
            before delivery of the Goods.
          </li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 mb-3">Delivery</h3>
        <ol className="pl-6 space-y-4">
          <li>
            27. We will deliver the Goods, to the Delivery Location by the time
            or within the agreed period or, failing any agreement, without undue
            delay and, in any event, not more than 30 days after the day on
            which the Contract is entered into.
          </li>
          <li>
            28. In any case, regardless of events beyond our control, if we do
            not deliver the Goods on time, you can (in addition to any other
            remedies) treat the Contract at an end if:
            <ol className="list-lower-alpha pl-6 space-y-2">
              <li>
                a. we have refused to deliver the Goods, or if delivery on time
                is essential taking into account all the relevant circumstances
                at the time the Contract was made, or you said to us before the
                Contract was made that delivery on time was essential; or
              </li>
              <li>
                b. after we have failed to deliver on time, you have specified a
                later period which is appropriate to the circumstances and we
                have not delivered within that period.
              </li>
            </ol>
          </li>
          <li>
            29. If you treat the Contract at an end, we will (in addition to
            other remedies) promptly return all payments made under the
            Contract.
          </li>
          <li>
            30. If you were entitled to treat the Contract at an end, but do not
            do so, you are not prevented from cancelling the Order for any Goods
            or rejecting Goods that have been delivered and, if you do this, we
            will (in addition to other remedies) without delay return all
            payments made under the Contract for any such cancelled or rejected
            Goods. If the Goods have been delivered, you must return them to us
            or allow us to collect them from you and we will pay the costs of
            this.
          </li>
          <li>
            31. If any Goods form a commercial unit (a unit is a commercial unit
            if division of the unit would materially impair the value of the
            goods or the character of the unit) you cannot cancel or reject the
            Order for some of those Goods without also cancelling or rejecting
            the Order for the rest of them.
          </li>
          <li>
            32. We do not generally deliver to addresses outside England and
            Wales, Scotland, Northern Ireland, the Isle of Man and Channels
            Islands. If, however, we accept an Order for delivery outside that
            area, you may need to pay import duties or other taxes, as we will
            not pay them.
          </li>
          <li>
            33. You agree we may deliver the Goods in instalments if we suffer a
            shortage of stock or other genuine and fair reason, subject to the
            above provisions and provided you are not liable for extra charges.
          </li>
          <li>
            34. If you or your nominee fail, through no fault of ours, to take
            delivery of the Goods at the Delivery Location, we may charge the
            reasonable costs of storing and redelivering them.
          </li>
          <li>
            35. The Goods will become your responsibility from the completion of
            delivery or Customer collection. You must, if reasonably
            practicable, examine the Goods before accepting them.
          </li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 mb-3">Risk and Title</h3>
        <ol className="pl-6 space-y-4">
          <li>
            36. Risk of damage to, or loss of, any Goods will pass to you when
            the Goods are delivered to you.
          </li>
          <li>
            37. You do not own the Goods until we have received payment in full.
            If full payment is overdue or a step occurs towards your bankruptcy,
            we can choose, by notice to cancel any delivery and end any right to
            use the Goods still owned by you, in which case you must return them
            or allow us to collect them.
          </li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 mb-3">
          Withdrawal and cancellation
        </h3>
        <ol className="pl-6 space-y-4">
          <li>
            38. You can withdraw the Order by telling us before the Contract is
            made, if you simply wish to change your mind and without giving us a
            reason, and without incurring any liability.
          </li>
          <li>
            39. This is a <strong>distance contract</strong> (as defined below)
            which has the cancellation rights{" "}
            <strong>(Cancellation Rights)</strong> set out below. These
            Cancellation Rights, however, do not apply, to a contract for the
            following goods (with no others) in the following circumstances:
            <ol className="list-lower-alpha pl-6 space-y-2">
              <li>
                a. goods that are made to your specifications or are clearly
                personalised;
              </li>
              <li>
                b. goods which are liable to deteriorate or expire rapidly.
              </li>
            </ol>
          </li>
          <li>
            40. Also, the Cancellation Rights for a Contract cease to be
            available in the following circumstances:
            <ol className="list-lower-alpha pl-6 space-y-2">
              <li>
                a. in the case of a contract for the supply of sealed audio or
                sealed video recordings or sealed computer software, if the
                goods become unsealed after delivery;
              </li>
              <li>
                b. in the case of any sales contract, if the goods become mixed
                inseparably (according to their nature) with other items after
                delivery.
              </li>
            </ol>
          </li>
        </ol>

        <h4 className="text-xl font-semibold mt-4 mb-2">Right to cancel</h4>
        <ol className="pl-6 space-y-4" start={41}>
          <li>
            41. Subject as stated in these Terms and Conditions, you can cancel
            this contract within 14 days without giving any reason.
          </li>
          <li>
            42. The cancellation period will expire after 14 days from the day
            on which you acquire, or a third party, other than the carrier
            indicated by you, acquires physical possession of the last of the
            Goods. In a contract for the supply of goods over time (ie
            subscriptions), the right to cancel will be 14 days after the first
            delivery.
          </li>
          <li>
            43. To exercise the right to cancel, you must inform us of your
            decision to cancel this Contract by a clear statement setting out
            your decision (eg a letter sent by post, fax or email). You can use
            the attached model cancellation form, but it is not obligatory. In
            any event, you must be able to show clear evidence of when the
            cancellation was made, so you may decide to use the model
            cancellation form.
          </li>
          <li>
            44. You can also electronically fill in and submit the model
            cancellation form or any other clear statement of the Customer's
            decision to cancel the Contract on our website vellioproperties.com.
            If you use this option, we will communicate to you an
            acknowledgement of receipt of such a cancellation in a Durable
            Medium (eg by email) without delay.
          </li>
          <li>
            45. To meet the cancellation deadline, it is sufficient for you to
            send your communication concerning your exercise of the right to
            cancel before the cancellation period has expired.
          </li>
        </ol>

        <h4 className="text-xl font-semibold mt-4 mb-2">
          Effects of cancellation in the cancellation period
        </h4>
        <ol className="pl-6 space-y-4" start={46}>
          <li>
            46. Except as set out below, if you cancel this Contract, we will
            reimburse to you all payments received from you, including the costs
            of delivery (except for the supplementary costs arising if you chose
            a type of delivery other than the least expensive type of standard
            delivery offered by us).
          </li>
        </ol>

        <h4 className="text-xl font-semibold mt-4 mb-2">
          Deduction for Goods supplied
        </h4>
        <ol className="pl-6 space-y-4" start={47}>
          <li>
            47. We may make a deduction from the reimbursement for loss in value
            of any Goods supplied, if the loss is the result of unnecessary
            handling by you (ie handling the Goods beyond what is necessary to
            establish the nature, characteristics and functioning of the Goods:
            eg it goes beyond the sort of handling that might be reasonably
            allowed in a shop). This is because you are liable for that loss
            and, if that deduction is not made, you must pay us the amount of
            that loss.
          </li>
        </ol>

        <h4 className="text-xl font-semibold mt-4 mb-2">
          Timing of reimbursement
        </h4>
        <ol className="pl-6 space-y-4" start={48}>
          <li>
            48. If we have not offered to collect the Goods, we will make the
            reimbursement without undue delay, and not later than:
            <ol className="list-lower-alpha pl-6 space-y-2">
              <li>
                a. 14 days after the day we receive back from you any Goods
                supplied, or
              </li>
              <li>
                b. (if earlier) 14 days after the day you provide evidence that
                you have sent back the Goods.
              </li>
            </ol>
          </li>
          <li>
            49. If we have offered to collect the Goods or if no Goods were
            supplied, we will make the reimbursement without undue delay, and
            not later than 14 days after the day on which we are informed about
            your decision to cancel this Contract.
          </li>
          <li>
            50. We will make the reimbursement using the same means of payment
            as you used for the initial transaction, unless you have expressly
            agreed otherwise; in any event, you will not incur any fees as a
            result of the reimbursement.
          </li>
        </ol>

        <h4 className="text-xl font-semibold mt-4 mb-2">Returning Goods</h4>
        <ol className="pl-6 space-y-4" start={51}>
          <li>
            51. If you have received Goods in connection with the Contract which
            you have cancelled, you must send back the Goods or hand them over
            to us at 53 Rodney Crescent, Filton, Bristol BS34 7AF, United
            Kingdom without delay and in any event not later than 14 days from
            the day on which you communicate to us your cancellation of this
            Contract. The deadline is met if you send back the Goods before the
            period of 14 days has expired. You agree that you will have to bear
            the cost of returning the Goods.
          </li>
          <li>
            52. For the purposes of these Cancellation Rights, these words have
            the following meanings:
            <ol className="list-lower-alpha pl-6 space-y-2">
              <li>
                <strong>a. distance contract</strong> means a contract concluded
                between a trader and a consumer under an organised distance
                sales or service-provision scheme without the simultaneous
                physical presence of the trader and the consumer, with the
                exclusive use of one or more means of distance communication up
                to and including the time at which the contract is concluded;
              </li>
              <li>
                <strong>b. sales contract</strong> means a contract under which
                a trader transfers or agrees to transfer the ownership of goods
                to a consumer and the consumer pays or agrees to pay the price,
                including any contract that has both goods and services as its
                object.
              </li>
            </ol>
          </li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 mb-3">Conformity</h3>
        <ol className="pl-6 space-y-4" start={53}>
          <li>
            53. We have a legal duty to supply the Goods in conformity with the
            Contract, and will not have conformed if it does not meet the
            following obligation.
          </li>
          <li>
            54. Upon delivery, the Goods will:
            <ol className="list-lower-alpha pl-6 space-y-2">
              <li>a. be of satisfactory quality;</li>
              <li>
                b. be reasonably fit for any particular purpose for which you
                buy the Goods which, before the Contract is made, you made known
                to us (unless you do not actually rely, or it is unreasonable
                for you to rely, on our skill and judgment) and be fit for any
                purpose held out by us or set out in the Contract; and
              </li>
              <li>c. conform to their description.</li>
            </ol>
          </li>
          <li>
            55. It is not a failure to conform if the failure has its origin in
            your materials.
          </li>
          <li>
            56. We will provide the following after-sales service: The supplier
            will support the customer in installing and activating their new
            equipment up to 30 days from the date of selling.
          </li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 mb-3">
          Successors and our sub-contractors
        </h3>
        <ol className="pl-6 space-y-4" start={57}>
          <li>
            57. Either party can transfer the benefit of this Contract to
            someone else, and will remain liable to the other for its
            obligations under the Contract. The Supplier will be liable for the
            acts of any sub-contractors who it chooses to help perform its
            duties.
          </li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 mb-3">
          Circumstances beyond the control of either party
        </h3>
        <ol className="pl-6 space-y-4" start={58}>
          <li>
            58. In the event of any failure by a party because of something
            beyond its reasonable control:
            <ol className="list-lower-alpha pl-6 space-y-2">
              <li>
                a. the party will advise the other party as soon as reasonably
                practicable; and
              </li>
              <li>
                b. the party's obligations will be suspended so far as is
                reasonable, provided that that party will act reasonably, and
                the party will not be liable for any failure which it could not
                reasonably avoid, but this will not affect the Customer's above
                rights relating to delivery and any right to cancel, below.
              </li>
            </ol>
          </li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 mb-3">Privacy</h3>
        <ol className="pl-6 space-y-4" start={59}>
          <li>
            59. Your privacy is critical to us. We respect your privacy and
            comply with the General Data Protection Regulation with regard to
            your personal information.
          </li>
          <li>
            60. These Terms and Conditions should be read alongside, and are in
            addition to our policies, including our privacy policy (
            <Link href="/privacy" className="text-blue-600 hover:underline">
              vellioproperties.com/privacy
            </Link>
            ) and cookies policy (
            <Link href="/cookies" className="text-blue-600 hover:underline">
              vellioproperties.com/cookies
            </Link>
            ).
          </li>
          <li>
            61. For the purposes of these Terms and Conditions:
            <ol className="list-lower-alpha pl-6 space-y-2">
              <li>
                a. 'Data Protection Laws' means any applicable law relating to
                the processing of Personal Data, including, but not limited to
                the Directive 95/46/EC (Data Protection Directive) or the GDPR.
              </li>
              <li>
                b. 'GDPR' means the General Data Protection Regulation (EU)
                2016/679.
              </li>
              <li>
                c. 'Data Controller', 'Personal Data' and 'Processing' shall
                have the same meaning as in the GDPR.
              </li>
            </ol>
          </li>
          <li>
            62. We are a Data Controller of the Personal Data we Process in
            providing Goods to you.
          </li>
          <li>
            63. Where you supply Personal Data to us so we can provide Goods to
            you, and we Process that Personal Data in the course of providing
            the Goods to you, we will comply with our obligations imposed by the
            Data Protection Laws:
            <ol className="list-lower-alpha pl-6 space-y-2 start">
              <li>
                a. before or at the time of collecting Personal Data, we will
                identify the purposes for which information is being collected;
              </li>
              <li>
                b. we will only Process Personal Data for the purposes
                identified;
              </li>
              <li>
                c. we will respect your rights in relation to your Personal
                Data; and
              </li>
              <li>
                d. we will implement technical and organisational measures to
                ensure your Personal Data is secure.
              </li>
            </ol>
          </li>
          <li>
            64. For any enquiries or complaints regarding data privacy, you can
            contact director at the following e-mail address:{" "}
            <a
              href="mailto:support@vellioproperties.com"
              className="text-blue-600 hover:underline"
            >
              support@vellioproperties.com
            </a>
            .
          </li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 mb-3">
          Excluding liability
        </h3>
        <ol className="pl-6 space-y-4" start={65}>
          <li>
            65. The Supplier does not exclude liability for: (i) any fraudulent
            act or omission; or (ii) for death or personal injury caused by
            negligence or breach of the Supplier's other legal obligations.
            Subject to this, the Supplier is not liable for (i) loss which was
            not reasonably foreseeable to both parties at the time when the
            Contract was made, or (ii) loss (eg loss of profit) to the
            Customer's business, trade, craft or profession which would not be
            suffered by a Consumer – because the Supplier believes the Customer
            is not buying the Goods wholly or mainly for its business, trade,
            craft or profession.
          </li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 mb-3">
          Governing law, jurisdiction and complaints
        </h3>
        <ol className="pl-6 space-y-4" start={66}>
          <li>
            66. The Contract (including any non-contractual matters) is governed
            by the law of England and Wales.
          </li>
          <li>
            67. Disputes can be submitted to the jurisdiction of the courts of
            England and Wales or, where the Customer lives in Scotland or
            Northern Ireland, in the courts of respectively Scotland or Northern
            Ireland.
          </li>
          <li>
            68. We try to avoid any dispute, so we deal with complaints in the
            following way: If a dispute occurs customers should contact us to
            find a solution. We will aim to respond with an appropriate solution
            within 7 days.
          </li>
        </ol>

        <p className="mt-8">
          For further query or information, Please contact{" "}
          <a
            href="mailto:support@vellioproperties.com"
            className="text-blue-600 hover:underline"
          >
            support@vellioproperties.com
          </a>
        </p>
      </div>
    </div>
  );
}
