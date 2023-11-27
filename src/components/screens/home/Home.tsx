import React, { FC } from "react";

import Layout from "@/components/layout/Layout";
import Hero from "@/components/hero/Hero";
import Facility from "@/components/facilitySection/Facility";
import Diploma from "@/components/diplomaSection/Diploma";

const Home: FC = () => {
  return (
    <Layout
      title="Психологічна допомога ПТСР Консультація депресії Лікування панічних атак Консультація при алкоголізмі"
      description="Лікування депресії
Консультація депресії
Симптоми депресії
Депресія
Панічні атаки
 розпізнати панічні атаки
Лікування панічних атак
ПТСР
Алкоголізм
Психологічна допомога при алкоголізмі
Консультація при алкоголізмі
Невпевненість в собі
Низька самооцінка
Як підняти самооцінку
Як пережити розлучення"
    >
      <Hero />
      <Facility />
      <Diploma />
    </Layout>
  );
};

export default Home;
