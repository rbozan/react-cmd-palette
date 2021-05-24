import { ReactComponent as MehIcon } from "./icons/meh.svg";
import "./CommandPaletteNoResults.scss";

export const CommandPaletteNoResults = () => {
  return (
    <div className="command-palette--no-results--container">
      <MehIcon width={32} height={32} />
      <p>There are no actions to see here.</p>
    </div>
  );
};
