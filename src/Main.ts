import "module-alias/register";
import { ServerApplication } from "./infra/postgres/server-application";

(async (): Promise<void> => {
  await runApplication();
})();

async function runApplication(): Promise<void> {
  const serverApplication: ServerApplication = ServerApplication.new();
  await serverApplication.run();
}
