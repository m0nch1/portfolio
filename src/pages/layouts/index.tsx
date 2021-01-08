import Header from '../components/organisms/header';

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props): JSX.Element {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
