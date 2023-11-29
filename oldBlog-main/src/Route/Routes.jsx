// //Samp lePage
import SamplePage from '../Components/Pages/PageLayout/SimplePage';
import DeployReact from "../Components/Pages/React/DeployReact";
import JavaFileIO from "../Components/Pages/Java/JavaFileIO";
import PersonalProfile from "../Components/Pages/PersonalPages/personalProfile";
import AwsGuideLine from "../Components/Pages/Aws/AwsGuideLine";
import JpaEmbeddedId from "../Components/Pages/Java/JpaEmbeddedId";
import AwsIAMUsers from "../Components/Pages/Aws/IAM/AwsIAMUsers";
import AwsIAMMfa from "../Components/Pages/Aws/IAM/AwsIAMMfa";
import AwsIAMTools from "../Components/Pages/Aws/IAM/AwsIAMTools";
import AwsIAMSummary from "../Components/Pages/Aws/IAM/AwsIAMSummary";
import AwsEC2Guideline from "../Components/Pages/Aws/EC2/AwsEC2Guideline";
import AwsEC2Connection from "../Components/Pages/Aws/EC2/AwsEC2Connection";
import AwsEC2Pay from "../Components/Pages/Aws/EC2/AwsEC2Pay";
import AwsEC2Summary from "../Components/Pages/Aws/EC2/AwsEC2Summary";
import AwsEC2SecurityGroup from "../Components/Pages/Aws/EC2/AwsEC2SecurityGroup";
import AWSEBS from "../Components/Pages/Aws/InstanceStorage/AwsEBS";
import AWSAMI from "../Components/Pages/Aws/InstanceStorage/AwsAMI";
import AWSEFS from "../Components/Pages/Aws/InstanceStorage/AwsEFS";
import AwsFsx from "../Components/Pages/Aws/InstanceStorage/AwsFsx";
import AwsStorageSummary from "../Components/Pages/Aws/InstanceStorage/AwsStorageSummary";
import LoadBalanceGuideline from "../Components/Pages/Aws/LoadBalance/LoadBalanceGuideline";
import AwsS3Guideline from "../Components/Pages/Aws/S3/AwsS3Guideline";
import AwsS3Security from "../Components/Pages/Aws/S3/AwsS3Security";
import AwsS3Application from "../Components/Pages/Aws/S3/AwsS3Application";
import AwsS3Classes from "../Components/Pages/Aws/S3/AwsS3Classes";
import AwsS3Responsibility from "../Components/Pages/Aws/S3/AwsS3Responsibility";
import AwsS3Snow from "../Components/Pages/Aws/S3/AwsS3Snow";
import AwsS3Summary from "../Components/Pages/Aws/S3/AwsS3Summary";
import AwsDatabaseRDS from "../Components/Pages/Aws/Database/AwsDatabaseRDS";
import AwsDatabaseDynamoDB from "../Components/Pages/Aws/Database/AwsDatabaseDynamoDB";
import AwsDatabaseCollection from "../Components/Pages/Aws/Database/AwsDatabaseCollection";
import AwsDatabaseSummary from "../Components/Pages/Aws/Database/AwsDatabaseSummary";
import EmbeddingAISearch from "../Components/Pages/Python/EmbeddingAISearch";
import AwsECS from "../Components/Pages/Aws/Compute/AwsECS";
import AwsServerless from "../Components/Pages/Aws/Compute/AwsServerless";
import AwsComputeSummary from "../Components/Pages/Aws/Compute/AwsComputeSummary";


export const routes = [
  // //page
  { path: `${process.env.PUBLIC_URL}/:layout`, Component: <PersonalProfile />, componentName: 'PersonalProfile' },
  { path: `${process.env.PUBLIC_URL}/working/cat/:layout`, Component: <SamplePage /> , componentName: 'SamplePage'},
  //   aws
  { path: `${process.env.PUBLIC_URL}/aws/guideline/:layout`, Component: <AwsGuideLine />, componentName: 'AwsGuideLine'  },
    //aws IAM
  { path: `${process.env.PUBLIC_URL}/aws/IAM/users/:layout`, Component: <AwsIAMUsers />, componentName: 'AwsIAMUsers' },
  { path: `${process.env.PUBLIC_URL}/aws/IAM/mfa/:layout`, Component: <AwsIAMMfa />, componentName: 'AwsIAMMfa' },
  { path: `${process.env.PUBLIC_URL}/aws/IAM/tools/:layout`, Component: <AwsIAMTools />, componentName: 'AwsIAMTools' },
  { path: `${process.env.PUBLIC_URL}/aws/IAM/summary/:layout`, Component: <AwsIAMSummary />, componentName: 'AwsIAMSummary' },
  //   aws EC2
  { path: `${process.env.PUBLIC_URL}/aws/EC2/guideline/:layout`, Component: <AwsEC2Guideline />, componentName: 'AwsEC2Guideline' },
  { path: `${process.env.PUBLIC_URL}/aws/EC2/ssh/:layout`, Component: <AwsEC2Connection />, componentName: 'AwsEC2Connection' },
  { path: `${process.env.PUBLIC_URL}/aws/EC2/role/:layout`, Component: <AwsEC2Pay />, componentName: 'AwsEC2Pay' },
  { path: `${process.env.PUBLIC_URL}/aws/EC2/security-group/:layout`, Component: <AwsEC2SecurityGroup />, componentName: 'AwsEC2SecurityGroup' },
  { path: `${process.env.PUBLIC_URL}/aws/EC2/summary/:layout`, Component: <AwsEC2Summary />, componentName: 'AwsEC2Summary' },
    //   aws EC2 storage
  { path: `${process.env.PUBLIC_URL}/aws/EC2/EBS/:layout`, Component: <AWSEBS />, componentName: 'AWSEBS' },
  { path: `${process.env.PUBLIC_URL}/aws/EC2/AMI/:layout`, Component: <AWSAMI />, componentName: 'AWSAMI' },
  { path: `${process.env.PUBLIC_URL}/aws/EC2/EFS/:layout`, Component: <AWSEFS />, componentName: 'AWSEFS' },
  { path: `${process.env.PUBLIC_URL}/aws/EC2/FSx/:layout`, Component: <AwsFsx />, componentName: 'AwsFsx' },
  { path: `${process.env.PUBLIC_URL}/aws/EC2/storage/summary/:layout`, Component: <AwsStorageSummary />, componentName: 'AwsStorageSummary' },
    //  aws load balance
  { path: `${process.env.PUBLIC_URL}/aws/load-balance/guideline/:layout`, Component: <LoadBalanceGuideline />, componentName: 'LoadBalanceGuideline' },
    // S3
  { path: `${process.env.PUBLIC_URL}/aws/S3/guideline/:layout`, Component: <AwsS3Guideline/>, componentName: 'AwsS3Guideline' },
  { path: `${process.env.PUBLIC_URL}/aws/S3/security/:layout`, Component: <AwsS3Security/>, componentName: 'AwsS3Security' },
  { path: `${process.env.PUBLIC_URL}/aws/S3/application/:layout`, Component: <AwsS3Application/>, componentName: 'AwsS3Application' },
  { path: `${process.env.PUBLIC_URL}/aws/S3/classes/:layout`, Component: <AwsS3Classes/>, componentName: 'AwsS3Classes' },
  { path: `${process.env.PUBLIC_URL}/aws/S3/responsibility/:layout`, Component: <AwsS3Responsibility/>, componentName: 'AwsS3Responsibility' },
  { path: `${process.env.PUBLIC_URL}/aws/S3/snow/:layout`, Component: <AwsS3Snow/>, componentName: 'AwsS3Snow' },
  { path: `${process.env.PUBLIC_URL}/aws/S3/summary/:layout`, Component: <AwsS3Summary/>, componentName: 'AwsS3Summary' },
    // database
  { path: `${process.env.PUBLIC_URL}/aws/database/RDS/:layout`, Component: <AwsDatabaseRDS/>, componentName: 'AwsDatabaseRDS' },
  { path: `${process.env.PUBLIC_URL}/aws/database/dynamoDB/:layout`, Component: <AwsDatabaseDynamoDB/>, componentName: 'AwsDatabaseDynamoDB' },
  { path: `${process.env.PUBLIC_URL}/aws/database/collection/:layout`, Component: <AwsDatabaseCollection/>, componentName: 'AwsDatabaseCollection' },
  { path: `${process.env.PUBLIC_URL}/aws/database/summary/:layout`, Component: <AwsDatabaseSummary/>, componentName: 'AwsDatabaseSummary' },

    //compute
  { path: `${process.env.PUBLIC_URL}/aws/compute/ECS/:layout`, Component: <AwsECS/>, componentName: 'AwsECS' },
  { path: `${process.env.PUBLIC_URL}/aws/compute/serverless/:layout`, Component: <AwsServerless/>, componentName: 'AwsServerless' },
  { path: `${process.env.PUBLIC_URL}/aws/compute/summary/:layout`, Component: <AwsComputeSummary/>, componentName: 'AwsComputeSummary' },
    //Python
  { path: `${process.env.PUBLIC_URL}/python/embedding/vectorDataChatbot:layout`, Component: <EmbeddingAISearch/>, componentName: 'EmbeddingAISearch' },

  //   personal
  { path: `${process.env.PUBLIC_URL}/personal/profile/:layout`, Component: <PersonalProfile />, componentName: 'PersonalProfile' },
  //   react
  { path: `${process.env.PUBLIC_URL}/react/deploy-react/:layout`, Component: <DeployReact />, componentName: 'DeployReact' },

  //   java
  { path: `${process.env.PUBLIC_URL}/java/java-file-io/:layout`, Component: <JavaFileIO />, componentName: 'JavaFileIO' },
  { path: `${process.env.PUBLIC_URL}/java/jpa-embedded-id/:layout`, Component: <JpaEmbeddedId />, componentName: 'JpaEmbeddedId' },
];
