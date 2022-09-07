import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';

import Button from './button.component';
import Header from './header.component';
import { FooterComponent } from 'src/app/footer/footer.component';
export default {
  title: 'Example/Header',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      declarations: [Button],
      imports: [CommonModule],
    }),
  ],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<FooterComponent> = (args: FooterComponent) => ({
  props: args,
});
export const LoggedIn = Template.bind({});
LoggedIn.args = {

};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};