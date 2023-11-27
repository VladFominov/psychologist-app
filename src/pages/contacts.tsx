import Layout from "@/components/layout/Layout";
import Contacts from "@/components/screens/contacts/Contacts";
import { NextPage } from "next";

const ContactsPage: NextPage = () => {
  return (
    <Layout title="Психологічна допомога ПТСР Консультація депресії Лікування панічних атак Консультація при алкоголізмі">
      <Contacts />
    </Layout>
  );
};

export default ContactsPage;
