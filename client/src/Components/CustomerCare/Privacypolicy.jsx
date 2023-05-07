import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BottomNav from '../Commoncomponents/BottomNav';

function Privacypolicy() {
  return (
    <>
    <div className="py-10 px-6 md:py-20 md:px-20 md:mx-72 lg:mx-96">
    <h1 className='font-Montserrat text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-14'>Privacy Policy</h1>
    <Accordion>
      <AccordionSummary  expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Typography > <span className='font-Montserrat text-xl md:text-2xl lg:text-3xl'>Introduction</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography><span className='font-Montserrat text-base md:text-xl'>
        We value the trust you place in us and recognise the importance of secure transactions and information privacy. This Privacy Policy describes how pRe-Love and its affiliates collect, use, share, protect or otherwise process your personal information through pRe-Love website https://www.pre-love.co.in . While you may be able to browse certain sections of the Platform without registering with us, however, please note we do not offer any product/service under this Platform outside India. Your personal information will primarily be stored and processed in India and may have data protection laws that are different from those that apply in the country in which you are located. By visiting this Platform, providing your information or availing any product/service offered on the Platform, you expressly agree to be bound by the terms and conditions of this Privacy Policy, the Terms of Use and the applicable service/product terms and conditions, and agree to be governed by the laws on India including but not limited to the laws applicable to data protection and privacy. If you do not agree please do not use or access our Platform.</span> </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary  expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Typography > <span className='font-Montserrat text-xl md:text-2xl lg:text-3xl'>Collection</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography><span className='font-Montserrat text-base md:text-xl'>
        We collect your personal information related to your identity, demographics and when you use our Platform, services or otherwise interact with us during the course of our relationship and related information provided from time to time. Some of the information that we may collect includes but is not limited to Information provided to us during sign-up/registering or using our Platform such as name, date of birth, address, telephone/mobile number, email ID,occupation and any such information shared as proof of identity or address. We may also use some of the information such as your shopping behavior, preferences, call data records, device location, voice, your browsing history, and other information that you provide to us from time to time. Our primary goal in doing so is to provide you a safe, efficient, smooth, and customized experience. This allows us to provide services and features that most likely meet your needs, and to customize our Platform to make your experience safer and easier. In general, you can browse the Platform without telling us who you are or revealing any personal information about yourself. Once you give us your personal information, you are not anonymous to us. Where possible, we indicate which fields are required and which fields are optional. You always have the option to not provide information, by choosing not to use a particular service or feature on the Platform. We use this information to do research on our user’s demographics, interests, and behavior to better understand and serve our users. This information may include the URL that you just came from (whether this URL is on our Platform or not), which URL you next go to (whether this URL is on our Platform or not), your computer browser information, and your IP address. If you choose to post messages, reviews and ratings on our Platform, we will collect that information you provide to us. Please note that such messages posted by you will be in public domain and can be read by others as well, please exercise caution while posting such messages, personal details, photos and reviews. We retain this information as necessary to resolve disputes, provide customer support, internal research and troubleshoot problems as permitted by law. If you send us personal correspondence, such as emails or letters, or if other users or third parties send us correspondence about your activities or postings on the Platform, we may collect such information into a file specific to you. While you can browse some sections of our Platform without being a registered member, certain activities (such as placing order or consuming our online content or services or participating in any event) requires registration. We may use your contact information to send you offers based in your previous orders or preferences and your interests. If you receive an e-mail, a call from a person/association claiming to be from pRe-Love seeking sensitive personal information like debit/credit card PIN, net-banking or mobile banking password, we request you to never provide such information. We at pRe-Love or our affiliate logistics partner do not at any time connect with you requesting for such information, report immediately to an appropriate law enforcement agency.   </span> </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary  expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Typography > <span className='font-Montserrat text-xl md:text-2xl lg:text-3xl'>Use</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography><span className='font-Montserrat text-base md:text-xl'>
        We will ask for your permission to allow us access to your text messages (SMS), instant messages, contacts in your directory, camera, photo gallery, location and device information: (i) to send commercial communication regarding your orders or other products and services (ii) to enhance your experience on the Platform and provide you access to the products and services offered on the Platform by sellers, affiliates, partners or lending partners. You understand that your access to these products/services may be affected in the event permission is not provided to us. In our efforts to continually improve our product and service offerings, we collect and analyse demographic and profile data about users’ activity on our Platform. We identify and use your IP address to help diagnose problems with our server, and to administer our Platform. Your IP address is also used to help identify you and to gather broad demographic information. We may occasionally ask you to complete surveys conducted by us. Participation in these surveys is purely voluntary in nature. We use this data to tailor your experience at our Platform, providing you with content that we think you might be interested in and to display content according to your preferences.</span> </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary  expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Typography > <span className='font-Montserrat text-xl md:text-2xl lg:text-3xl'>Security Precautions</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography><span className='font-Montserrat text-base md:text-xl'>
        Whenever you access your account information, we offer the use of a secure server.  The transmission of information is not completely secure for reasons beyond our control. We adopt industry standard security measures and keep updating our systems from time to time to protect your personal information against any hacking or virus dissemination. However, by using the Platform, the users accept the security implications of data transmission over the internet and the World Wide Web which cannot always be guaranteed as completely secure, and therefore, there would always remain certain inherent risks regarding use of the Platform. Users are responsible for ensuring the protection of login and password records for their account.</span> </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary  expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Typography > <span className='font-Montserrat text-xl md:text-2xl lg:text-3xl'>Your Rights</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography><span className='font-Montserrat text-base md:text-xl'>
        We take every reasonable step to ensure that your personal information that we process is accurate and, where necessary, kept up to date, and any of your personal information that we process that you inform us is inaccurate (having regard to the purposes for which they are processed) is erased or rectified. You may access, correct, and update you personal information directly through the functionalities provided on the Platform. You may delete certain non-mandatory information by logging into our website and visiting Profile and Settings sections. You can also write to us at the contact information provided below to assist you with these requests.
</span> </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary  expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Typography > <span className='font-Montserrat text-xl md:text-2xl lg:text-3xl'>Consents</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography><span className='font-Montserrat text-base md:text-xl'>
        By visiting our Platform or by providing your information, you consent to the collection, use, storage, disclosure and otherwise processing of your information on the Platform in accordance with the Privacy Policy. If you disclose the personal information relating to other people, you represent that you have the authority to do so and permit us to use the information in accordance with the Privacy policy.
</span> </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary  expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Typography > <span className='font-Montserrat text-xl md:text-2xl lg:text-3xl'>Changes to this Privacy Policy</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography><span className='font-Montserrat text-base md:text-xl'>
        Please check our Privacy Policy periodically for changes. We may update this Privacy policy to reflect changes to our information practices. We will alert you to significant changes by posting the date our Privacy Policy got last updated, placing a notice on our Platform, or by sending you an email when we are required to do so by applicable law.
</span> </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary  expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Typography > <span className='font-Montserrat text-xl md:text-2xl lg:text-3xl'>Contact us</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography><span className='font-Montserrat text-base md:text-xl'>Mail: vidit.prelove@gmail.com
        </span> </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary  expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Typography > <span className='font-Montserrat text-xl md:text-2xl lg:text-3xl'>Queries</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography><span className='font-Montserrat text-base md:text-xl'>
        If you have any query, concern, or complaint in relation to collection or usage of your personal information under this Privacy Policy, please contact us at the contact information provided above.</span> </Typography>
      </AccordionDetails>
    </Accordion>
    </div>
    <BottomNav /></>
  )
}

export default Privacypolicy