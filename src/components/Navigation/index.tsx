// 参考例
import { Navbar, Button, Menu } from '@mantine/core';

function MyApp() {
  return (
    <Navbar>
      <Navbar.Section>
        <Button variant="light">Home</Button>
        <Button variant="light">About</Button>
        <Button variant="light">Contact</Button>
      </Navbar.Section>

      <Navbar.Section position="right">
        {/* メニュー */}
        <Menu control={<Button variant="outline">More</Button>} menuPosition="end" closeOnItemClick>
          <Menu.Item>Settings</Menu.Item>
          <Menu.Item>Profile</Menu.Item>
          <Menu.Item>Logout</Menu.Item>
        </Menu>
      </Navbar.Section>
    </Navbar>
  );
}
