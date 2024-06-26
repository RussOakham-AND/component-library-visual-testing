import './App.css';
import { Button, buttonStyles } from '@/components/button/button';
import { ArrowLeft } from 'lucide-react';
import { BrowserRouter, Link } from 'react-router-dom';

const brandId = import.meta.env.VITE_BRAND_ID

function App() {
  console.log(`Building for brand ID: ${brandId}`);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background font-sans antialiased">
        <h1 className="text-3xl font-bold underline" data-testid="app-wrapper">
          Hello world!
        </h1>
        <div>
          <Button
            buttonType="primary"
            className="m-10"
            onPress={() => {
              window.console.log('1st Button clicked!');
            }}
          >
            Primary Button
          </Button>
          <Button
            buttonType="secondary"
            rounded="lg"
            className="m-10"
            onPress={() => {
              window.console.log('2nd Button clicked!');
            }}
          >
            Secondary Rounded Button
          </Button>
          <Button
            buttonType="outline"
            size="small"
            rounded="full"
            className="m-10"
            onPress={() => {
              window.console.log('3rd Button clicked!');
            }}
          >
            Outline Small Button
          </Button>
          <Button
            buttonType="primary"
            theme={2}
            className="m-10"
            onPress={() => {
              window.console.log('4th Button clicked!');
            }}
          >
            Theme 2 Override Button
          </Button>
          <Link
            to="/"
            className={buttonStyles({
              buttonType: 'link',
              size: 'small',
              className: 'm-10 w-fit',
            })}
          >
            <ArrowLeft size={10} />
            Link
          </Link>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
