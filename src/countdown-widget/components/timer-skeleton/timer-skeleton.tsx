import { Grid, Skeleton } from "@chakra-ui/react";

export default function TimerSkeleton() {
  return (
    <Grid
      gridTemplateAreas='"title title title title"
    "days minutes hours seconds"'
      gap={4}
    >
      <Skeleton w="410px" h="50px" gridArea={"title"} borderRadius={"lg"} />
      <SkeletonUnit gridArea={"days"} />
      <SkeletonUnit gridArea={"minutes"} />
      <SkeletonUnit gridArea={"hours"} />
      <SkeletonUnit gridArea={"seconds"} />
    </Grid>
  );
}

function SkeletonUnit({ ...props }) {
  return (
    <Skeleton
      w="90px"
      h="120px"
      gridArea={"seconds"}
      borderRadius={"lg"}
      {...props}
    />
  );
}
