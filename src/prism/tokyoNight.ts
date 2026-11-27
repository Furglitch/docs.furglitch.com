import type {PrismTheme} from 'prism-react-renderer';

type Palette = {
  bg: string; fg: string; comment: string; red: string; orange: string;
  yellow: string; green: string; cyan: string; blue: string; magenta: string;
  purple: string; teal: string;
};

const make = (c: Palette): PrismTheme => ({
  plain: {color: c.fg, backgroundColor: c.bg},
  styles: [
    {types: ['comment', 'prolog', 'doctype', 'cdata'], style: {color: c.comment, fontStyle: 'italic'}},
    {types: ['punctuation'], style: {color: c.cyan}},
    {types: ['namespace'], style: {opacity: 0.7}},
    {types: ['tag', 'deleted'], style: {color: c.red}},
    {types: ['property', 'constant', 'symbol'], style: {color: c.teal}},
    {types: ['boolean', 'number'], style: {color: c.orange}},
    {types: ['selector', 'attr-name', 'char', 'builtin', 'inserted'], style: {color: c.green}},
    {types: ['string', 'attr-value', 'template-string'], style: {color: c.green}},
    {types: ['operator', 'entity', 'url', 'regex'], style: {color: c.cyan}},
    {types: ['atrule', 'keyword'], style: {color: c.purple}},
    {types: ['function'], style: {color: c.blue}},
    {types: ['class-name', 'maybe-class-name'], style: {color: c.yellow}},
    {types: ['variable', 'parameter'], style: {color: c.fg}},
    {types: ['important'], style: {color: c.red, fontWeight: 'bold'}},
    {types: ['bold'], style: {fontWeight: 'bold'}},
    {types: ['italic'], style: {fontStyle: 'italic'}},
  ],
});

export const tokyoNight = make({
  bg: '#1f2335', fg: '#c0caf5', comment: '#565f89', red: '#f7768e',
  orange: '#ff9e64', yellow: '#e0af68', green: '#9ece6a', cyan: '#89ddff',
  blue: '#7aa2f7', magenta: '#bb9af7', purple: '#bb9af7', teal: '#73daca',
});

export const tokyoNightDay = make({
  bg: '#d0d5e3', fg: '#3760bf', comment: '#848cb5', red: '#f52a65',
  orange: '#b15c00', yellow: '#8c6c3e', green: '#587539', cyan: '#006a83',
  blue: '#2e7de9', magenta: '#9854f1', purple: '#7847bd', teal: '#118c74',
});
