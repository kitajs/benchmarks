<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.20.2`
* __Run:__ Mon May 04 2026 02:37:03 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 47588.8    | 20.52        | 8.49          |
| polka                    | 0.5.2    | ✓      | 47074.4    | 20.75        | 8.40          |
| kita                     | 1.1.36   | ✓      | 46903.2    | 20.81        | 8.41          |
| server-base-router       | 7.1.32   | ✓      | 46388.0    | 21.07        | 8.27          |
| rayo                     | 1.4.6    | ✓      | 46309.6    | 21.10        | 8.26          |
| server-base              | 7.1.32   | ✗      | 45892.8    | 21.28        | 8.18          |
| connect                  | 3.7.0    | ✗      | 45722.6    | 21.37        | 8.15          |
| fastify                  | 4.29.1   | ✓      | 45120.0    | 21.67        | 8.09          |
| polkadot                 | 1.0.0    | ✗      | 44913.6    | 21.77        | 8.01          |
| connect-router           | 1.3.8    | ✓      | 42815.2    | 22.85        | 7.64          |
| 0http                    | 3.5.3    | ✓      | 42420.0    | 23.08        | 7.56          |
| h3                       | 1.15.11  | ✗      | 40464.0    | 24.21        | 7.22          |
| h3-router                | 1.15.11  | ✓      | 38987.2    | 25.15        | 6.95          |
| restana                  | 4.9.9    | ✓      | 38212.8    | 25.67        | 6.81          |
| koa                      | 2.16.4   | ✗      | 36132.2    | 27.19        | 6.44          |
| hono                     | 4.12.16  | ✓      | 35916.6    | 27.34        | 5.89          |
| take-five                | 2.0.0    | ✓      | 35142.2    | 27.95        | 12.64         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34315.4    | 28.64        | 6.12          |
| restify                  | 11.1.0   | ✓      | 34174.4    | 28.75        | 6.16          |
| koa-router               | 12.0.1   | ✓      | 33010.6    | 29.80        | 5.89          |
| hapi                     | 21.4.8   | ✓      | 31255.4    | 31.48        | 5.57          |
| fastify-big-json         | 4.29.1   | ✓      | 11301.2    | 87.90        | 130.02        |
| express                  | 4.22.1   | ✓      | 10880.6    | 91.32        | 1.94          |
| express-with-middlewares | 4.22.1   | ✓      | 9705.5     | 102.40       | 3.61          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
