import qmsportal1 from '../../public/assets/qmsportal-1.png';
import qmsportal2 from '../../public/assets/qmsportal-2.png';
import zynappse from '../../public/assets/Zynappse-website.png';
import article from '../../public/assets/Article-website.png';
import portfolio from '../../public/assets/Portfolio-website.png';

export const SliderData = [
  {
    image: qmsportal1,
    text: 'PUP Quality Management System Portal'
  },
  {
    image: qmsportal2,
    text: 'PUP Quality Management System Portal'
  },
  {
    image: zynappse,
    text: 'Revamped Zynappse Website'
  },
  {
    image: article,
    text: 'Article Website'
  },
  {
    image: portfolio,
    text: 'Portfolio Website'
  }
].map((slide, index, array) => ({
  ...slide,
  number: `${index + 1}/${array.length}`
}));
