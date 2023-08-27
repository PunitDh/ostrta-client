import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Bold } from "src/components/shared/styles";
import { calculateScore } from "src/utils";

const RecentGame = ({ game }) => {
  const formatDate = (date) =>
    new Intl.DateTimeFormat(undefined, {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(new Date(date));

  const score = calculateScore(game);

  const playerScores = Object.values(score)
    .map((player) => `${player.name}: ${player.score}`)
    .join(", ");

  const rounds = game.rounds.filter((it) => it.moves.length > 0).length;

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        {formatDate(game.updatedAt)}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary" variant="outlined" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <div>
          {game.players
            .map((player) => player.firstName)
            .join(` played ${rounds} round${rounds !== 1 ? "s" : ""} with `)}
        </div>
        <div>
          <Bold>{playerScores}</Bold>
        </div>
      </TimelineContent>
    </TimelineItem>
  );
};

export default RecentGame;