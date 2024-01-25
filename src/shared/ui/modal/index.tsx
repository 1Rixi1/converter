import { Box, Dialog, DialogTitle } from "@mui/material";

type Props = {
  isOpen: boolean;
  onClose: (value: string) => void;
  title: string;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, title, children }: Props) => {
  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>{title}</DialogTitle>

      <Box>{children}</Box>
    </Dialog>
  );
};
