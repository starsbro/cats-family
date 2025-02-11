import './Privacy.css';
import Button from "./Button";

function Privacy() {
    
    return(
        <div>
             <h2 className="privacyTitle">Cats Family Privacy Policy</h2>
            <p className="privacy__content">Last updated: Apr 19, 2024</p>
            <p className="privacy__content">We operates http://localhost:5173/ (the "Site"). This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site.
</p>
            <p className="privacy__content">We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.</p>
            <h3 className="privacySubtitle">Information Collection And Use</h3>
            <p className="privacy__content">While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name ("Personal Information").
</p>
            <h3 className="privacySubtitle">Log Data</h3>
            <p className="privacy__content">Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data").</p>
            <p className="privacy__content">This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
</p>
            <p className="privacy__content">In addition, we may use third party services such as Google Analytics that collect, monitor, and analyze this data.</p>
            <h3 className="privacySubtitle">Communications</h3>
            <p className="privacy__content">We may use your Personal Information to contact you with newsletters, marketing, or promotional materials and other information that relates to our services.</p>
            <h3 className="privacySubtitle">Cookies</h3>
            <p className="privacy__content">Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.
</p>
            <p className="privacy__content">Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
</p>
            <h3 className="privacySubtitle">Security</h3>
            <p className="privacy__content">The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
            <h3 className="privacySubtitle">Changes To This Privacy Policy</h3>
            <p className="privacy__content">This Privacy Policy is effective as of [Date] and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.</p>
            <p className="privacy__content">We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>
            <h3 className="privacySubtitle">Contact Us</h3>
            <p className="privacy__content">If you have any questions about this Privacy Policy, please contact us with email address xxx@gmail.com.</p>
            <Button className="my-button" onClick={() => { 
                console.log('Button clicked!'); 
                window.location.href = "/";
                }}
                visual="link">Back to homepage
            </Button>
        </div>
    );
}

export default Privacy;
