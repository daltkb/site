import { Component, createSignal, Show } from 'solid-js';
import { VsClose } from 'solid-icons/vs';

const Alert: Component = () => {
  const [showAlert, setShowAlert] = createSignal(true);

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <Show when={showAlert()}>
      <div class="flex justify-between items-center text-white w-full bg-[#F7A5C2] p-3 rounded-lg border-4 border-solid border-[#AE3967]">
        <h1 class="font-medium text-lg">
          This site is still under construction!
        </h1>
        <VsClose size={24} class="cursor-pointer" onClick={closeAlert} />
      </div>
    </Show>
  );
};

export default Alert;
