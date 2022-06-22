import Sidebar from "../sidebar/sidebar";

interface LeftSidebarProps {
  children: React.ReactNode;
  [key: string]: any;
}

export default function LeftSidebar({ children, ...props }: LeftSidebarProps) {
  return (
    <Sidebar
      id="left-sidebar"
      pr="1rem"
      borderRight={"1px solid"}
      borderColor={"gray.200"}
      left="0"
      zIndex={1}
      {...props}
    >
      {children}
    </Sidebar>
  );
}
