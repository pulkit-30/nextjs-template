'use client';

import Icons from './icons';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname, useRouter } from '@/lib/i18n';
import {
  AvailableLanguageTag,
  availableLanguageTags,
  languageTag,
} from '@/paraglide/runtime';

const LanguageLabel: Record<AvailableLanguageTag, string> = {
  en: 'English',
  hi: 'Hindi',
};

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="space-x-2">
          <Icons.globe />
          <div>{languageTag().toUpperCase()}</div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {availableLanguageTags.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => {
              router.push(pathname, { locale });
            }}
          >
            {LanguageLabel[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
