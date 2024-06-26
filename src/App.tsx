import './App.css';
import { Button } from '@/components/button/button';
import { ArrowLeft } from 'lucide-react';

function App() {
  return (
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
        <Button
          buttonType="link"
          className="gap-x-1 m-10"
          size="small"
          onPress={() => {
            window.console.log('5th Button clicked!');
          }}
        >
          <ArrowLeft size={10} className="mt-0.5" />
          Link
        </Button>
      </div>
    </div>
  );
}

export default App;
