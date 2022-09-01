import React from "react";
import {
  Section,
  Contents,
  MainHeader,
  Terms,
  HeroSection,
  AccountTerms,
  Title,
  AccountTexts,
  ListContainer,
  ListItems,
  Meaning,
  Text,
  SubHeading,
} from "./termStyle";

const terms = () => {
  return (
    <Section>
      <HeroSection>
        <MainHeader>Terms of Service</MainHeader>
      </HeroSection>
      <Contents>
        <Terms>
          Last updated on: December 10, 2020 <br /> <br /> By signing up for a
          foodie Account (as defined in Section 1) or by using any foodie
          Services (as defined below), you are agreeing to be bound by the
          following terms and conditions (the “Terms of Service”). <br /> <br />{" "}
          As used in these Terms of Service, “we”, “us” and “foodie” means the
          applicable foodie Contracting Party (as defined in Section 4 below).{" "}
          <br /> <br /> The services offered by foodie under the Terms of
          Service include various products and services to help you sell goods
          and services to buyers, whether online (“Online Services”) by enabling
          you to create and build your own online store, in person (“POS
          Services”), or both. Any such services offered by foodie are referred
          to in these Terms of Services as the “Services”. Any new features or
          tools which are added to the current Services shall be also subject to
          the Terms of Service. You can review the current version of the Terms
          of Service at any time at https://www.shopify.com/legal/terms. foodie
          reserves the right to update and change the Terms of Service by
          posting updates and changes to the Shopify website. You are advised to
          check the Terms of Service from time to time for any updates or
          changes that may impact you. and if you do not accept such amendments,
          you must cease using the Services. <br /> <br /> You must read, agree
          with and accept all of the terms and conditions contained or expressly
          referenced in these Terms of Service, including foodie Acceptable Use
          Policy (“AUP”) and Privacy Policy, and, if applicable, the
          Supplementary Terms of Service for E.U. Merchants (“EU Terms”), the
          foodie API License and Terms of Use (“API Terms”) and the foodie Data
          Processing Addendum (“DPA”) before you may sign up for a Shopify
          Account or use any foodie Service. Additionally, if you offer goods or
          services in relation to COVID-19, you must read, acknowledge and agree
          to the Rules of Engagement for Sale of COVID-19 Related Products.{" "}
          <br /> <br /> Everyday language summaries are provided for convenience
          only and appear in bold under each section, but these summaries are
          not legally binding. Please read the Terms of Service, including any
          document referred to in these Terms of Service, for the complete
          picture of your legal requirements. By using foodie or any foodie
          services, you are agreeing to these terms. Be sure to occasionally
          check back for updates.
        </Terms>
        <AccountTerms>
          <Title>1. Account Terms</Title>
          <AccountTexts>
            <ListContainer>
              <ListItems>
                To access and use the Services, you must register for a foodie
                account (“Account”) by providing your full legal name, current
                address, phone number, a valid email address, and any other
                information indicated as required. Shopify may reject your
                application for an Account, or cancel an existing Account, for
                any reason, in our sole discretion.
              </ListItems>
              <ListItems>
                You must be the older of: (i) 18 years, or (ii) at least the age
                of majority in the jurisdiction where you reside and from which
                you use the Services to open an Account.
              </ListItems>
              <ListItems>
                You confirm that you are receiving any Services provided by
                Shopify for the purposes of carrying on a business activity and
                not for any personal, household or family purpose.
              </ListItems>
              <ListItems>
                You acknowledge that Shopify will use the email address you
                provide on opening an Account or as updated by you from time to
                time as the primary method for communication with you. You must
                monitor the primary Account email address you provide to Shopify
                and your primary Account email address must be capable of both
                sending and receiving messages. Your email communications with
                Shopify can only be authenticated if they come from your primary
                Account email address.
              </ListItems>
              <ListItems>
                You are responsible for keeping your password secure. Shopify
                cannot and will not be liable for any loss or damage from your
                failure to maintain the security of your Account and password.
              </ListItems>
              <ListItems>
                You acknowledge that you are responsible for the creation and
                operation of your Shopify Store.
              </ListItems>
            </ListContainer>
            <Meaning>
              <SubHeading>Meaning:</SubHeading>
              <Text>
                You are responsible for your Account and any Materials you
                upload to the Shopify Service. Remember that if you violate
                these terms we may cancel your service. <br />
                <br />
                If we need to reach you, we will send you an email.
              </Text>
            </Meaning>
          </AccountTexts>
        </AccountTerms>
      </Contents>
    </Section>
  );
};

export default terms;
