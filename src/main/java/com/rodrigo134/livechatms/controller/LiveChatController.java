package com.rodrigo134.livechatms.controller;

import com.rodrigo134.livechatms.domain.ChatInput;
import com.rodrigo134.livechatms.domain.ChatOutput;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;


@Controller
public class LiveChatController {


    @MessageMapping("/chat")
    @SendTo("/topic/livechat")
    public ChatOutput chat(ChatInput chatInput){

        var safeUser = HtmlUtils.htmlEscape(chatInput.username());
        var safeMessage = HtmlUtils.htmlEscape(chatInput.message());

        return new ChatOutput(safeUser,safeMessage);
    }
}
