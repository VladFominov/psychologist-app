
interface CardData{
    index:number;
    photo: string;
    title: string;
    description?: string[];
  }
const cardData: CardData[] = [
    {
        index:1,
      photo: '/images/addiction.jpg',
      title: 'Хімічні та нехімічні залежності',
      description: ["алкоголізм", "наркоманія", "харчова залежність", "комп’ютерна залежність", "ігроманія"],
    },
    {
        index:2,
      photo: '/images/codependency.jpg',
      title: 'Співзалежні відносини',
    },
    {
        index:3,
      photo: '/images/selfesteen.jpg',
      title: 'Проблеми самооцінки та проблеми характеру',
      description: ["невпевненість", "агресивність", "перфекціонізм", "залежність від чужої думки"],
    },
  ]
 
  export default cardData;
  