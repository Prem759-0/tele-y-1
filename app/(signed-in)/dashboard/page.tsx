'use client';

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { LogOutIcon, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation"; 
import { useUser } from "@clerk/nextjs";
import {
  Channel,
  Window,
  Thread,
  useChatContext,
  ChannelHeader,
  MessageList,
  MessageInput,
} from "stream-chat-react";

function Dashboard() {
  const router = useRouter();
  const { user } = useUser();
  const { channel, setActiveChannel } = useChatContext();
  const { setOpen } = useSidebar();

  const handleCall = () => {
    if (!channel) return;
    router.push(`/dashboard/video-call/${channel.id}`);
    setOpen(false);
  };

  const handleLeaveChat = async () => {
    if (!channel || !user?.id) return;

    const confirmLeave = window.confirm("Are you sure you want to leave the chat?");
    if (!confirmLeave) return;

    try {
      // Remove current user from channel
      await channel.removeMembers([user.id]);

      setActiveChannel(undefined);

      router.push("/dashboard");
    } catch (error) {
      console.error("Error leaving chat", error);
    }
  };

  return (
    <div className="flex flex-col w-full flex-1">
      {channel ? (
        <Channel>
          <Window>
            <div className="flex items-center justify-between">
              {channel.data?.member_count === 1 ? (
                <ChannelHeader title="Everyone else has left this chat!" />
              ) : (
                <ChannelHeader />
              )}

              <div className="flex items-center gap-1 sm:gap-2">
                <Button 
                  variant="outline" 
                  onClick={handleCall}
                  className="text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 h-8 sm:h-10"
                >
                  <VideoIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline ml-1 sm:ml-2">Video Call</span>
                  <span className="inline sm:hidden">Call</span>
                </Button>

                <Button
                  variant="outline"
                  onClick={handleLeaveChat}
                  className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950 text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 h-8 sm:h-10"
                >
                  <LogOutIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline ml-1 sm:ml-2">Leave Chat</span>
                  <span className="inline sm:hidden">Leave</span>
                </Button>
              </div>
            </div>

            <MessageList />

            <div className="sticky bottom-0 w-full">
              <MessageInput />
            </div>
          </Window>
          <Thread />
        </Channel>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl font-semibold text-muted-foreground mb-4">
            No chat selected
          </h2>
          <p className="text-muted-foreground">
            Select a chat from the sidebar or start a new conversation
          </p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
