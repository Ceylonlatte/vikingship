import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Upload, {UploadFile} from './upload';

const defaultFileList: UploadFile[] = [
    { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
    { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
    { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
]

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Upload',
    component: Upload,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Upload>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Upload> = (args) => <Upload {...args} />;

const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
        alert('file too big')
        return false
    }
    return true
}

const filePromise = (file: File) => {
    const newFile = new File([file], 'new_name.png', {type: file.type})
    return Promise.resolve(newFile)
}
export const PrimaryBtn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryBtn.args = {
    action: 'https://run.mocky.io/v3/ed14c81a-0936-4987-8813-cc676c608c88',
    defaultFileList,
    onChange: (file) => {
        console.log(file)
    },
    beforeUpload: filePromise,
    onProgress: (percentage, file) => {
        console.log(file)
    }
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
