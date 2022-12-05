// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import SoftBox from "components/SoftBox";

import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    Sidebar,
    Search,
    ConversationList,
    Conversation,
    Avatar,
    ConversationHeader,
    EllipsisButton,
    TypingIndicator,
    MessageSeparator
} from "@chatscope/chat-ui-kit-react";

function Chat() {

    return (
        <DashboardLayout>
            <DashboardNavbar action="chats" />
            <SoftBox
                style={{
                    height: "600px",
                    position: "relative",
                }}
            >
                <MainContainer>
                    <Sidebar position="left" scrollable={true}>
                        <Search placeholder="Search..." />
                        <ConversationList>
                            <Conversation
                                name="Trung Nguyen"
                                lastSenderName="Trung Nguyen"
                                info="Yes i can do it for you"
                                active
                            >
                                <Avatar
                                    src={
                                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ol_1foTEG2r2TCXto5BAm_4M92fHHX4exA&usqp=CAU"
                                    }
                                    name="Trung Nguyen"
                                    status="available"
                                />
                            </Conversation>
                            <Conversation name="Bang" lastSenderName="Bang DS" info="Hello">
                                <Avatar
                                    src={
                                        "https://png.pngtree.com/png-clipart/20190921/original/pngtree-cartoon-animal-avatar-download-png-image_4702750.jpg"
                                    }
                                    name="Bang DS"
                                    status="dnd"
                                />
                            </Conversation>
                            <Conversation name="TanNN" lastSenderName="TanNN" info="Oke" unreadCnt={3}>
                                <Avatar
                                    src={
                                        "https://images.freeimages.com/clg/istock/previews/1026/102672691-animal-emotion-avatar-vector-icon.jpg"
                                    }
                                    name="TanNN"
                                    status="available"
                                />
                            </Conversation>
                            <Conversation name="Thai pro" lastSenderName="Thai pro" info="How are you" unreadDot>
                                <Avatar
                                    src={
                                        "https://e7.pngegg.com/pngimages/59/659/png-clipart-computer-icons-scalable-graphics-avatar-emoticon-animal-fox-jungle-safari-zoo-icon-animals-orange-thumbnail.png"
                                    }
                                    name="Thai pro"
                                    status="available"
                                    unreadDot
                                />
                            </Conversation>
                            <Conversation
                                name="Trung Nguyen"
                                lastSenderName="Trung Nguyen"
                                info="Yes i can do it for you"
                            >
                                <Avatar
                                    src={
                                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ol_1foTEG2r2TCXto5BAm_4M92fHHX4exA&usqp=CAU"
                                    }
                                    name="Trung Nguyen"
                                    status="available"
                                />
                            </Conversation>
                            <Conversation
                                name="Trung Nguyen"
                                lastSenderName="Trung Nguyen"
                                info="Yes i can do it for you"
                            >
                                <Avatar
                                    src={
                                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ol_1foTEG2r2TCXto5BAm_4M92fHHX4exA&usqp=CAU"
                                    }
                                    name="Trung Nguyen"
                                    status="available"
                                />
                            </Conversation>
                            <Conversation
                                name="Trung Nguyen"
                                lastSenderName="Trung Nguyen"
                                info="Yes i can do it for you"
                            >
                                <Avatar
                                    src={
                                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ol_1foTEG2r2TCXto5BAm_4M92fHHX4exA&usqp=CAU"
                                    }
                                    name="Trung Nguyen"
                                    status="available"
                                />
                            </Conversation>
                            <Conversation
                                name="Trung Nguyen"
                                lastSenderName="Trung Nguyen"
                                info="Yes i can do it for you"
                            >
                                <Avatar
                                    src={
                                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ol_1foTEG2r2TCXto5BAm_4M92fHHX4exA&usqp=CAU"
                                    }
                                    name="Trung Nguyen"
                                    status="available"
                                />
                            </Conversation>
                            <Conversation
                                name="Trung Nguyen"
                                lastSenderName="Trung Nguyen"
                                info="Yes i can do it for you"
                            >
                                <Avatar
                                    src={
                                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ol_1foTEG2r2TCXto5BAm_4M92fHHX4exA&usqp=CAU"
                                    }
                                    name="Trung Nguyen"
                                    status="available"
                                />
                            </Conversation>
                        </ConversationList>
                    </Sidebar>

                    <ChatContainer>
                        <ConversationHeader>
                            <ConversationHeader.Back />
                            <Avatar
                                src={
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ol_1foTEG2r2TCXto5BAm_4M92fHHX4exA&usqp=CAU"
                                }
                                name="Trung Nguyen"
                            />
                            <ConversationHeader.Content userName="Trung Nguyen" info="Active 10 mins ago" />
                            <ConversationHeader.Actions>
                                <EllipsisButton orientation="vertical" />
                            </ConversationHeader.Actions>
                        </ConversationHeader>
                        <MessageList typingIndicator={<TypingIndicator content="Trung Nguyen is typing" />}>
                            <MessageSeparator content="Saturday, 30 November 2019" />
                            <Message
                                model={{
                                    message: "Hello my friend",
                                    sentTime: "15 mins ago",
                                    sender: "Trung Nguyen",
                                    direction: "incoming",
                                    position: "single",
                                }}
                            >
                                <Avatar
                                    src={
                                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ol_1foTEG2r2TCXto5BAm_4M92fHHX4exA&usqp=CAU"
                                    }
                                    name="Trung Nguyen"
                                />
                            </Message>
                            <Message
                                model={{
                                    message: "Hello my friend",
                                    sentTime: "15 mins ago",
                                    sender: "Patrik",
                                    direction: "outgoing",
                                    position: "single",
                                }}
                                avatarSpacer
                            />
                            <Message
                                model={{
                                    message: "Hello my friend",
                                    sentTime: "15 mins ago",
                                    sender: "Trung Nguyen",
                                    direction: "incoming",
                                    position: "first",
                                }}
                                avatarSpacer
                            />
                            <Message
                                model={{
                                    message: "Hello my friend",
                                    sentTime: "15 mins ago",
                                    sender: "Trung Nguyen",
                                    direction: "incoming",
                                    position: "normal",
                                }}
                                avatarSpacer
                            />
                            <Message
                                model={{
                                    message: "Hello my friend",
                                    sentTime: "15 mins ago",
                                    sender: "Trung Nguyen",
                                    direction: "incoming",
                                    position: "normal",
                                }}
                                avatarSpacer
                            />
                            <Message
                                model={{
                                    message: "Hello my friend",
                                    sentTime: "15 mins ago",
                                    sender: "Trung Nguyen",
                                    direction: "incoming",
                                    position: "last",
                                }}
                            >
                                <Avatar
                                    src={
                                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ol_1foTEG2r2TCXto5BAm_4M92fHHX4exA&usqp=CAU"
                                    }
                                    name="Trung Nguyen"
                                />
                            </Message>
                            <Message
                                model={{
                                    message: "Hello my friend",
                                    sentTime: "15 mins ago",
                                    sender: "Patrik",
                                    direction: "outgoing",
                                    position: "first",
                                }}
                            />
                            <Message
                                model={{
                                    message: "Hello my friend",
                                    sentTime: "15 mins ago",
                                    sender: "Patrik",
                                    direction: "outgoing",
                                    position: "normal",
                                }}
                            />
                            <Message
                                model={{
                                    message: "Hello my friend",
                                    sentTime: "15 mins ago",
                                    sender: "Patrik",
                                    direction: "outgoing",
                                    position: "normal",
                                }}
                            />
                            <Message
                                model={{
                                    message: "Hello my friend",
                                    sentTime: "15 mins ago",
                                    sender: "Patrik",
                                    direction: "outgoing",
                                    position: "last",
                                }}
                            />

                            <Message
                                model={{
                                    message: "Hello my friend",
                                    sentTime: "15 mins ago",
                                    sender: "Trung Nguyen",
                                    direction: "incoming",
                                    position: "first",
                                }}
                                avatarSpacer
                            />
                            <Message
                                model={{
                                    message: "Yes i can do it for you",
                                    sentTime: "15 mins ago",
                                    sender: "Trung Nguyen",
                                    direction: "incoming",
                                    position: "last",
                                }}
                            >
                                <Avatar
                                    src={
                                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ol_1foTEG2r2TCXto5BAm_4M92fHHX4exA&usqp=CAU"
                                    }
                                    name="Trung Nguyen"
                                />
                            </Message>
                        </MessageList>
                        <MessageInput placeholder="Type message here" />
                    </ChatContainer>
                </MainContainer>
            </SoftBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Chat;