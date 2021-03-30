function footer() {
  const content = document.querySelector('#content');
  const footerContainer = document.createElement('div');
  const footerLinks = document.createElement('div');
  const footerLinkWrapper = document.createElement('div');
  const aboutItems = document.createElement('div');
  const contactItems = document.createElement('div');
  const videoItems = document.createElement('div');
  const socialItems = document.createElement('div');
  const about = document.createElement('h2');
  const contact = document.createElement('h2');
  const videos = document.createElement('h2');
  const socials = document.createElement('h2');
  const socialMedia = document.createElement('div');
  const socialMediaWrap = document.createElement('div');
  const footerLogo = document.createElement('div');
  const footerATag = document.createElement('a');
  const i = document.createElement('i');
  const websiteRight = document.createElement('p');
  const socialIcons = document.createElement('div');
  const iconOne = document.createElement('a');
  const iconTwo = document.createElement('a');
  const iconThree = document.createElement('a');
  const iconFour = document.createElement('a');
  const iIg = document.createElement('i');
  const iFb = document.createElement('i');
  const iYt = document.createElement('i');
  const iTw = document.createElement('i');

  //About us
  const howItWorks = document.createElement('a').textContent = 'How it works';
  const testimonials = document.createElement('a').textContent = 'Testimonials';
  const careers = document.createElement('a').textContent = 'Careers';
  const investments = document.createElement('a').textContent = 'Investments';
  const tOS = document.createElement('a').textContent = 'Terms of Service';

  howItWorks.href = '/index.html';
  testimonials.href = '/index.html';
  careers.href = '/index.html';
  investments.href = '/index.html';
  tOS.href = '/index.html';
  about.textContent = 'About Us';

  aboutItems.append(about, howItWorks, testimonials, careers, investments, tOS).classList.add('footer__link--items');

  //Contact us
  const cont = document.createElement('a').textContent = 'Contact';
  const support = document.createElement('a').textContent = 'Support';
  const destination = document.createElement('a').textContent = 'Careers';
  const sponsorship = document.createElement('a').textContent = 'Sponsorship';

  cont.href = '/index.html';
  support.href = '/index.html';
  destination.href = '/index.html';
  sponsorship.href = '/index.html';
  contact.textContent = 'Contact Us';

  contactItems.append(contact, cont, support, destination, sponsorship).classList.add('footer__link--items');

  // Videos
  const submit = document.createElement('a').textContent = 'Submit Video';
  const ambassadors = document.createElement('a').textContent = 'Ambassadors';
  const agency = document.createElement('a').textContent = 'Agency';
  const influencer = document.createElement('a').textContent = 'Influencer';;

  submit.href = '/index.html';
  ambassadors.href = '/index.html';
  agency.href = '/index.html';
  influencer.href = '/index.html';
  videos.textContent = 'Videos';

  videoItems.append(videos, submit, ambassadors, agency, influencer).classList.add('footer__link--items');

  // Social Media
  const instagram = document.createElement('a').textContent = 'Instagram';
  const facebook = document.createElement('a').textContent = 'Facebook';
  const youtube = document.createElement('a').textContent = 'Youtube';
  const twitter = document.createElement('a').textContent = 'Twitter';

  instagram.href = '/index.html';
  facebook.href = '/index.html';
  youtube.href = '/index.html';
  twitter.href = '/index.html';
  socials.textContent = 'Social Media';

  socialItems.append(socials, instagram, facebook, youtube, twitter).classList.add('footer__link--items');

  // Footer Link Wrapper
  footerLinkWrapper.append(aboutItems, contactItems, videoItems, socialItems);

}
export default footer;