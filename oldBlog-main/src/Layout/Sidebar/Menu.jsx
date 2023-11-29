export const MENUITEMS = [
    {
        menutitle: 'General',
        menucontent: 'Dashboards,Widgets',
        Items: [
            {
                title: 'React',
                icon: 'social',
                type: 'sub',
                children: [
                    {
                        active: false,
                        path: `${process.env.PUBLIC_URL}/react/deploy-react/:layout`,
                        title: 'deploy gh-pages',
                        type: 'link',
                    },
                ],
            },
            {
                title: 'Java',
                icon: 'sample-page',
                type: 'sub',
                children: [
                    {
                        active: false,
                        path: `${process.env.PUBLIC_URL}/java/java-file-io/:layout`,
                        title: 'Java File IO',
                        type: 'link',
                    },{
                        active: false,
                        path: `${process.env.PUBLIC_URL}/java/jpa-embedded-id/:layout`,
                        title: 'Jpa Embedded ID',
                        type: 'link',
                    },
                ],
            }, {
                title: 'Ai learning',
                icon: 'editors',
                type: 'sub',
                children: [
                    {
                        active: false,
                        path: `${process.env.PUBLIC_URL}/python/embedding/vectorDataChatbot:layout`,
                        title: 'Embedding Data Chat Bot',
                        type: 'link',
                    },
                    {
                        active: false,
                        path: `${process.env.PUBLIC_URL}/working/cat/:layout`,
                        title: 'GPT-2 training model',
                        type: 'link',
                    },
                ],
            }, {
                title: 'AWS certification',
                icon: 'aws',
                type: 'sub',
                children: [
                    {
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/guideline/:layout`,
                        title: 'AWS 前言',
                        type: 'link',
                    }
                ],
            },{
                title: 'AWS IAM',
                icon: 'aws',
                type: 'sub',
                children:[
                    {
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/IAM/users/:layout`,
                        title: 'Users & Group',
                        type: 'link',
                    },{
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/IAM/mfa/:layout`,
                        title: 'MFA',
                        type: 'link',
                    },{
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/IAM/tools/:layout`,
                        title: 'IAM Tools',
                        type: 'link',
                    },{
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/IAM/summary/:layout`,
                        title: 'Summary',
                        type: 'link',
                    },
                ]
            },{
                title: 'Amazon EC2',
                icon: 'aws',
                type: 'sub',
                children:[
                    {
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/EC2/guideline/:layout`,
                        title: 'Create Instance',
                        type: 'link',
                    },{
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/EC2/ssh/:layout`,
                        title: 'Connection',
                        type: 'link',
                    },{
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/EC2/security-group/:layout`,
                        title: 'Security Group',
                        type: 'link',
                    },{
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/EC2/role/:layout`,
                        title: 'Instance Purchasing',
                        type: 'link',
                    },{
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/EC2/summary/:layout`,
                        title: 'Summary',
                        type: 'link',
                    }
                ]
            },{
                title: 'EC2 Instance Storage Section',
                icon: 'aws',
                type: 'sub',
                children:[
                    {
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/EC2/EBS/:layout`,
                        title: 'EBS Volume 區塊儲存',
                        type: 'link',
                    }, {
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/EC2/AMI/:layout`,
                        title: 'AMI machine image',
                        type: 'link',
                    }, {
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/EC2/EFS/:layout`,
                        title: 'EFS Elastic File System',
                        type: 'link',
                    }, {
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/EC2/FSx/:layout`,
                        title: 'FSx檔案系統服務',
                        type: 'link',
                    }, {
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/EC2/storage/summary/:layout`,
                        title: 'Instance Storage 結語',
                        type: 'link',
                    }
                ]
            },{
                title: 'Elastic Load Balance',
                icon: 'aws',
                type: 'sub',
                children:[
                    {
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/load-balance/guideline/:layout`,
                        title: 'Guideline',
                        type: 'link',
                    }
                ]
            },{
                title: 'S3',
                icon: 'aws',
                type: 'sub',
                children:[
                    {
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/S3/guideline/:layout`,
                        title: 'Guideline',
                        type: 'link',
                    },{
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/S3/security/:layout`,
                        title: 'Security',
                        type: 'link',
                    },{
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/S3/application/:layout`,
                        title: 'Application',
                        type: 'link',
                    },{
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/S3/classes/:layout`,
                        title: 'Classes',
                        type: 'link',
                    },{
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/S3/responsibility/:layout`,
                        title: 'Responsibility',
                        type: 'link',
                    },{
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/S3/snow/:layout`,
                        title: 'snow',
                        type: 'link',

                    },{
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/S3/summary/:layout`,
                        title: 'summary',
                        type: 'link',
                    }
                ]
            },{
                title: 'Database',
                icon: 'aws',
                type: 'sub',
                children:[
                    {
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/database/RDS/:layout`,
                        title: 'RDS',
                        type: 'link',
                    },{
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/database/dynamoDB/:layout`,
                        title: 'dynamoDB',
                        type: 'link',
                    },{
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/database/collection/:layout`,
                        title: 'different types',
                        type: 'link',
                    },{
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/database/summary/:layout`,
                        title: 'summary',
                        type: 'link',
                    }
                ]
            },{
                title: 'Compute',
                icon: 'aws',
                type: 'sub',
                children:[
                    {
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/compute/ECS/:layout`,
                        title: 'AWS Docker',
                        type: 'link',
                    },{
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/compute/serverless/:layout`,
                        title: 'Serverless services',
                        type: 'link',
                    },{
                        active: false,
                        path: `${process.env.PUBLIC_URL}/aws/compute/summary/:layout`,
                        title: 'Serverless summary',
                        type: 'link',
                    }
                ]
            }
        ],
    },
];
