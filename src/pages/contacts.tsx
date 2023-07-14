import Layout from '@/components/layout/Layout';
import Contacts from '@/components/screens/contacts/Contacts';
import { NextPage } from 'next';


const ContactsPage: NextPage = () => {
  return   <Layout title='Contacts'>
      <Contacts />
    </Layout>  
}

export default ContactsPage;