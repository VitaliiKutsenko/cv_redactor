import React from 'react';
import { messageSelector } from '../../store/selectors/messageSelector';
import { MessageWindowWrapper } from './messageWindowStyle';

export const MessageWindow = ({ content }) => {
  const message = messageSelector(content);

  return (
    <MessageWindowWrapper>{<p color={message?.hasError ? 'red' : 'green'}>{message?.message}</p>}</MessageWindowWrapper>
  );
};
