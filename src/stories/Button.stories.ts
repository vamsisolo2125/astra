// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from './button.component';
import { HeaderComponent } from 'src/app/header/header.component';

import { FormsModule } from '@angular/forms';
// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/content',
  component: HeaderComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://sButtontorybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<Button> = (args: Button) => ({
  props: args,
  
});


export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  primary: false,
  label: 'contet',
};

export const back = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
back.args = {
  primary: false,
  label: 'contet',
};
