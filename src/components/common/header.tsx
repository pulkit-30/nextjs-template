import { ThemeSwitcher } from '../theme/theme-switcher';
import { LanguageSwitcher } from './language-switcher';

// app  header component
const Header = () => {
  return (
    <header>
      <nav className="flex h-12 items-end justify-end gap-2 px-8">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </nav>
    </header>
  );
};

export default Header;
