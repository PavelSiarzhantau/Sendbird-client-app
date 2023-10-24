import React, { useState, useCallback } from "react";

import {
  Channel as SBConversation,
  ChannelSettings as SBChannelSettings,
  withSendBird
} from "sendbird-uikit";

function CustomizedApp(props) {
  // default props
  const {
    stores: { sdkStore, userStore },
    config: {
      firstMessage,
      channelUrl,
      isOnline,
      userId,
      appId,
      accessToken,
      theme,
      userListQuery,
      logger,
      pubSub
    }
  } = props;
  return (
    <div className="customized-app">
      <div className="sendbird-app__wrap">
        <div></div>
        <div className="sendbird-app__conversation-wrap">
          <SBConversation channelUrl={props.channelUrl} />
        </div>
      </div>
    </div>
  );
}

export default withSendBird(CustomizedApp);
